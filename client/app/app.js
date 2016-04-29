import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.min.css';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

angular.module('app', [
  'ui.bootstrap',
  uiRouter,
  Common.name,
  Components.name
])
       .config(($locationProvider) => {
         "ngInject";
         // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
         // #how-to-configure-your-server-to-work-with-html5mode
         $locationProvider.html5Mode(true).hashPrefix('!');
       })
       .component('app', AppComponent);
