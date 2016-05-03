import OrderSender from './order.service';
import success from './success.partial.html';
import failure from './failure.partial.html';

export default class Order {
  companyName: '';
  contactPerson: '';
  contactEmail: '';
  contactPhone: '';
  eventDate: '';
  personCount: '';
};

class ModalInstanceController {
  modalInstance : {};

  constructor($uibModalInstance) {
    this.modalInstance = $uibModalInstance;
  }

  ok() {
    this.modalInstance.close(true);
  }
}

ModalInstanceController.$inject = ['$uibModalInstance'];

class OrderController {
  model: {};
  orderSender: {};
  sending: false;
  modalCtrl: {};

  constructor(orderSender, $uibModal) {
    "ngInject";
    this.name = 'order';
    this.model = new Order();
    this.orderSender = orderSender;
    this.modalCtrl = $uibModal;
  }

  log_model() {
    console.log(this.model);
  }

  submitOrder(form) {
    if(form.$valid) { this.postOrder(form); }
  }

  openModal(template) {
    var modalInstance = this.modalCtrl.open({
      animation: true,
      template: template,
      controller: ModalInstanceController,
      controllerAs: 'modal'
    });

    return modalInstance;
  }

  postOrder(form) {
    this.sending = true;

    var json = angular.toJson(this.model);
    var self = this;

    return this.orderSender
      .sendData(json)
      .then(function(res) { self.openModal(success);
                            self.sending = false;
                            self.model = {};
                            form.$setPristine();
                            form.$setUntouched();
                          },
            function(res) { self.openModal(failure);
                            self.sending = false; });
  }
}

OrderController.$inject = ['orderSender', '$uibModal'];

export default OrderController;
