from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return (self.vin)

class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.CharField(max_length=100, unique=True)

    def get_api_url(self):
        return reverse("api_technicians", kwargs={"id": self.id})

    def __str__(self):
        return (self.name)

class Appointment(models.Model):
    owner = models.CharField(max_length=100)
    appt_date = models.DateField(auto_now=False, auto_now_add=False, null=True)
    appt_time = models.TimeField(auto_now=False, auto_now_add=False, null=True)
    reason = models.CharField(max_length=200)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,
    )
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="appointments",
        on_delete=models.CASCADE,
        null=True,
    )


    def __str__(self):
        return (self.vin)
