import NavbarModule from './navbar'
import NavbarController from './navbar.controller';
import NavbarComponent from './navbar.component';
import NavbarTemplate from './navbar.html';

describe('Navbar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NavbarModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NavbarController();
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
      let component = NavbarComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NavbarTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NavbarController);
      });
  });
});
