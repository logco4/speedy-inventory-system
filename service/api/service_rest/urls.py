from django.urls import path
from .views import api_appointments, api_technicians

urlpatterns = [
    path("appointments/", api_appointments, name="api_appointments"),
    path("technicians/", api_technicians, name="api_technicians"),
]
