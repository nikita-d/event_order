import template from './order.html';
import controller from './order.controller';
import './order.styl';

let orderComponent = {
    restrict: 'E',
    bindings: { },
    template,
    controller,
    controllerAs: 'vm'
};

export default orderComponent;
