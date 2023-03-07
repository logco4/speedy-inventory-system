from django.urls import path
from .views import api_appointments, api_technicians, api_technician, api_appointment

urlpatterns = [
    path("appointments/", api_appointments, name="api_appointments"),
    path("technicians/", api_technicians, name="api_technicians"),
    path("technicians/<int:id>/", api_technician, name="api_technician"),
    path("appointments/<int:id>/", api_appointment, name="api_appointment"),
]
