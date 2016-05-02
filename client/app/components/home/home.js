import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import homeComponent from './home.component';

let homeModule = angular.module('home', [uiRouter, uiBootstrap])
                        .config(($stateProvider, $urlRouterProvider) => {
                          "ngInject";

                          $urlRouterProvider.otherwise('/');

                          $stateProvider.state('home', {
                            url: '/',
                            template: '<home></home>'
                          });
                        })
                        .component('home', homeComponent);

export default homeModule;
