from common.json import ModelEncoder
from .models import Technician, AutomobileVO, Appointment


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "vin",
        "id",
    ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number",
        "id",
    ]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "vin",
        "customer_name",
        "appt_date",
        "appt_time",
        "reason",
        "isVip",
        "id",
        "technician",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }
