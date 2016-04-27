import angular from 'angular';
import uiRouter from 'angular-ui-router';
import orderComponent from './order.component';

let orderModule = angular
    .module('order', [ uiRouter ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider.state('order', {
            'url' : '/order',
            'template' : '<order></order>'
        });
    })
    .component('order', orderComponent);

export default orderModule;
