import angular from 'angular';

class OrderSender {
    $http: {};

    constructor($http) {
        "ngInject";
        this.$http = $http;
    }

    sendData(data) {
        return this.$http
                   .post('/api/order', data)
    }
};
OrderSender.$inject = ['$http'];

export default OrderSender
