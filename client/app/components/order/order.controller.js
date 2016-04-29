import OrderSender from './order.service';

export default class Order {
    companyName: '';
    contactPerson: '';
    contactEmail: '';
    contactPhone: '';
    eventDate: '';
    personCount: 10;

    constructor() {
        this.eventDate = new Date();
    }
};

class OrderController {
    model: {};
    form: {};
    orderSender: {};
    completed: false;

    constructor($scope, orderSender) {
        this.name = 'order';
        this.model = new Order();
        this.orderSender = orderSender;
        this.completed = false;
    }

    log_model() {
        console.log(this.model);
    }

    submitOrder(form) {
        if(form.$valid) {
            this.postOrder();
        }
    }

    postOrder() {
        let json = angular.toJson(this.model);
        this.orderSender
            .sendData(json)
            .then(function(res) { log_model(); this.completed = true; },
                  function(res) { console.log(res) });
    }
}

OrderController.$inject = ['$scope', 'orderSender'];

export default OrderController;
