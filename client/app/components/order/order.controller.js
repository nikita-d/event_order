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

  constructor($scope) {
    this.name = 'order';
    this.model = new Order();
    $scope['model'] = this.model;
  }

  submitOrder() {
    console.log('submitted');
    console.log(this.model);
  }
}

OrderController.$inject = ['$scope', '$location'];

export default OrderController;
