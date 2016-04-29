import angular from 'angular';
import uiRouter from 'angular-ui-router';
import orderComponent from './order.component';
import postService from './order.service';

let orderModule = angular
    .module('order', [ uiRouter ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider.state('order', {
            'url' : '/order',
            'template' : '<order></order>'
        });
    })
    .component('order', orderComponent)
    .service('orderSender', postService);

export default orderModule;
