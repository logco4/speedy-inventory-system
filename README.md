# CarCar

Team:

* Logan - Service microservice
* Hayden Dunlap - Sales microservice

## Design

## Service microservice

The service microservice is a bounded context within this project that has 4 models.
    Appointment: the Appointment model describes a service appointment for doing some type of work on a car
    Status: the Status model decribes three statuses that an appointment may have: submitted, finished, or canceled.
    Technician: the Technician model describes a technician that is potentially responsible for a service appointment.
    AutomobileVO: the AutomobileVO model is the main point of integration to the Inventory bounded context. It holds key information about an automobile that comes from our poller polling the original inventory Automobile model for necessary data.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
