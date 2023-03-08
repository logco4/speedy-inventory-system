from django.urls import path
from .views import (
    api_list_customers,
    api_list_employees,
    api_list_records,
    api_show_record,
    api_list_automobiles,
)


urlpatterns = [
    path('employees/', api_list_employees, name="api_list_employees"),
    path('employees/<int:sales_person_id>/records/', api_list_records, name="api_list_records_filtered"),
    path('records/', api_list_records, name="api_list_records"),
    path('records/<int:record_id>/', api_show_record, name="api_show_record"),
    path('customers/', api_list_customers, name="api_list_customers"),
    path('automobiles/', api_list_automobiles, name="api_list_automobiles")
]
