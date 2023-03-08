from .models import SalesPerson, Customer, SalesRecord, AutomobileVO
from common.json import ModelEncoder


class AutomobileVOEncoder (ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "vin",
        "year",
        "manufacturer",
        "model",
    ]


class SalesPersonEncoder (ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_id",
    ]


class CustomerEncoder (ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number",
        "id"
    ]


class SalesRecordEncoder (ModelEncoder):
    model = SalesRecord
    properties = [
        "id",
        "price",
        "automobile",
        "sales_person",
        "customer",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales_person": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
    }
