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

The sales microservice is a bounded context consisting of 4 models:

AutomobileVO- This is the point of integration with the inventory microservice.
    We are using this model to store data for the vehicles stored in the inventory
    automobile model. We are using a poller to poll for new information every 60 seconds
    and update the VO.

Customer- This model is being used to store customer information.

SalesPerson- This model is being used to store employee information for sales people.

SalesRecord- This model is being used to hold information regarding the sale of a
    vehicle, and is related to the three other models by foreign key.
