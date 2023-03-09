# CarCar

Team:

* Logan - Service microservice
* Hayden Dunlap - Sales microservice

## Design



## Service microservice

Explain your models and integration with the inventory
microservice, here.

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
