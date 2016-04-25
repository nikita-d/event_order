import AboutModule from './about'
import AboutController from './about.controller';
import AboutComponent from './about.component';
import AboutTemplate from './about.html';

describe('About', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AboutModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AboutController();
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
      let component = AboutComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AboutTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AboutController);
      });
  });
});
