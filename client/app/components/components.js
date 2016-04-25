import angular from 'angular';
import Home from './home/home';
import Order from './order/order';
import About from './about/about';

let componentModule = angular.module('app.components', [
    Home.name,
    Order.name,
    About.name
]);

export default componentModule;
