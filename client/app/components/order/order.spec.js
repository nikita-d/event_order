import OrderModule from './order'
import OrderController from './order.controller';
import OrderComponent from './order.component';
import OrderTemplate from './order.html';

describe('Order', () => {
  let $rootScope, makeController;

  beforeEach(window.module(OrderModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new OrderController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
  });

  describe('Template', () => {
    // template specs
  });

  describe('Component', () => {
      // component/directive specs
      let component = OrderComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(OrderTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(OrderController);
      });
  });
});
