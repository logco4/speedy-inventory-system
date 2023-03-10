from django.db import models


class AutomobileVO (models.Model):
    import_href = models.CharField(max_length = 100)
    vin = models.CharField(max_length=17, unique=True)
    year = models.PositiveSmallIntegerField()
    manufacturer = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

class SalesPerson (models.Model):
    name = models.CharField(max_length = 100)
    employee_id = models.SmallIntegerField(unique=True)

class Customer (models.Model):
    name = models.CharField(max_length = 100)
    address = models.CharField(max_length = 200)
    phone_number = models.CharField(max_length = 13)

class SalesRecord (models.Model):
    price = models.CharField(max_length = 10)

    automobile = models.OneToOneField(
        AutomobileVO,
        related_name="sales_record",
        on_delete=models.PROTECT,
    )

    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales_records",
        on_delete=models.PROTECT
    )

    customer = models.ForeignKey(
        Customer,
        related_name="sales_records",
        on_delete=models.PROTECT
    )
