import OrderSender from './order.service';

export default class Order {
  companyName: '';
  contactPerson: '';
  contactEmail: '';
  contactPhone: '';
  eventDate: '';
  personCount: '';
};

class OrderController {
  model: {};
  orderSender: {};
  sending: false;
  completed: false;
  error: false;

  constructor(orderSender) {
    "ngInject";
    this.name = 'order';
    this.model = new Order();
    this.orderSender = orderSender;
    this.completed = false;
  }

  log_model() {
    console.log(this.model);
  }

  submitOrder(form) {
    if(form.$valid) { this.postOrder(); }
  }

  postOrder() {
    this.sending = true;
    var json = angular.toJson(this.model);
    var $this = this;
    this.orderSender
      .sendData(json)
      .then(function(res) { $this.log_model();
                            $this.completed = true;
                            $this.sending = false;
                          },
            function(res) { console.log(res); $this.completed = true; $this.sending = false; });
  }
}

OrderController.$inject = ['orderSender'];

export default OrderController;
