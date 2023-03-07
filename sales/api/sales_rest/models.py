from django.db import models

# Create your models here.

class AutomobileVO (models.Model):
    import_href = models.CharField(max_length = 100)
    vin = models.CharField(max_length=17, unique=True)

class sales_person (models.Model):
    name = models.CharField(max_length = 100)
    employee_id = models.SmallIntegerField()

class customer (models.Model):
    name = models.CharField(max_length = 100)
    address = models.CharField(max_length = 200)
    phone_number = models.CharField(max_length = 13)

class sales_record (models.Model):
    price = models.CharField(max_length = 10)

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales_record",
        on_delete=models.PROTECT
    )

    sales_person = models.ForeignKey(
        sales_person,
        related_name="sales_records",
        on_delete=models.PROTECT

    )

    customer = models.ForeignKey(
        customer,
        related_name="sales_records",
        on_delete=models.PROTECT
    )
