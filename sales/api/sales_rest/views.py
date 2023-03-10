from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.db import IntegrityError
import json
from .encoders import (
    AutomobileVOEncoder,
    SalesPersonEncoder,
    SalesRecordEncoder,
    CustomerEncoder,
)
from .models import AutomobileVO, SalesPerson, SalesRecord, Customer


@require_http_methods("GET")
def api_list_automobiles (request):
    autos = AutomobileVO.objects.filter(sales_record=None)
    return JsonResponse(
        {"autos": autos},
        encoder=AutomobileVOEncoder,
        safe=False
    )


@require_http_methods(["GET", "POST"])
def api_list_customers (request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False
        )


@require_http_methods(["GET", "POST"])
def api_list_employees (request):
    if request.method == "GET":
        sales_people = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_people": sales_people},
            encoder=SalesPersonEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)
        try:
            sales_person = SalesPerson.objects.create(**content)
        except IntegrityError:
            return JsonResponse(
                {"message": "Employee ID is associated with another employee"},
                status=403
            )
        return JsonResponse(
            sales_person,
            encoder=SalesPersonEncoder,
            safe=False
        )


@require_http_methods(["GET", "POST"])
def api_list_records (request, sales_person_id=None):
    if request.method == "GET":
        if sales_person_id == None:
            sales_records = SalesRecord.objects.all()
        else:
            try:
                sales_person = SalesPerson.objects.get(employee_id=sales_person_id)
                sales_records = SalesRecord.objects.filter(sales_person=sales_person)
            except:
                return JsonResponse(
                    {"message": "Invalid sales person"},
                    status=404
                )
        return JsonResponse(
            {"sales_records": sales_records},
            encoder=SalesRecordEncoder,
            safe=False
        )
    else:                ##POST
        content = json.loads(request.body)

        try:
            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer"},
                status=404
            )

        try:
            sales_person = SalesPerson.objects.get(employee_id=content["sales_person"])
            content["sales_person"] = sales_person
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid sales person"},
                status=404
            )

        try:
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile"},
                status=404
            )

        try:
            sales_record = SalesRecord.objects.create(**content)
        except IntegrityError:
            return JsonResponse(
                {"message": "Automobile is associated with another sales record"},
                status=403
            )

        return JsonResponse(
            sales_record,
            encoder=SalesRecordEncoder,
            safe=False
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_record (request, record_id):
    try:
        record = SalesRecord.objects.get(id=record_id)
    except SalesRecord.DoesNotExist:
        return JsonResponse(
            {"message": "Sales record does not exist"},
            status=404
        )

    if request.method == "GET":
        return JsonResponse(
            {"sales record: ": record},
            encoder=SalesRecordEncoder,
            safe=False
        )

    elif request.method == "PUT":
        content = json.loads(request.body)
        try:
            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer"},
                status=404
            )
        try:
            sales_person = SalesPerson.objects.get(employee_id=content["sales_person"])
            content["sales_person"] = sales_person
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid sales person"},
                status=404
            )
        try:
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile"},
                status=404
            )
        try:
            SalesRecord.objects.filter(id=record_id).update(**content)
        except IntegrityError:
            return JsonResponse(
                {"message": "Automobile is associated with another sales record"},
                status=403
            )

        record = SalesRecord.objects.get(id=record_id)
        return JsonResponse(
            record,
            encoder=SalesRecordEncoder,
            safe=False
        )

    else:                  ##DELETE
        count, _ = SalesRecord.objects.filter(id=record_id).delete()
        return JsonResponse({"deleted": count > 0})
