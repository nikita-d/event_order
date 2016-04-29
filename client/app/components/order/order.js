import angular from 'angular';
import uiRouter from 'angular-ui-router';
import orderComponent from './order.component';
import postService from './order.service';
import 'angular-ui-bootstrap';

let orderModule = angular
        .module('order', [ 'ui.bootstrap', uiRouter ])
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
