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

  constructor($scope, $location) {
    this.name = 'order';
    this.model = new Order();

    $scope['model'] = this.model;
  }

  submitOrder(form) {
      if(form.$valid) {
          console.log('form valid: ' + form.$valid);
          console.log(this.model);
      } else {
          console.log('form valid: ' + form.$valid);
      }
  }
}

OrderController.$inject = ['$scope', '$location'];

export default OrderController;
