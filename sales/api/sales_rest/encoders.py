from .models import sales_person, customer, sales_record, AutomobileVO
from common.json import ModelEncoder


class AutomobileVOEncoder (ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "vin",
    ]


class SalesPersonEncoder (ModelEncoder):
    model = sales_person
    properties = [
        "name",
        "employee_id",
    ]


class CustomerEncoder (ModelEncoder):
    model = customer
    properties = [
        "name",
        "address",
        "phone_number",
    ]


class SalesRecordEncoder (ModelEncoder):
    model = sales_record
    properties = [
        "price",
        "automobile",
        "sales_person",
        "customer",

    ]
