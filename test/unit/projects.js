import {Projects} from '../../src/projects';

class RouterStub {
  configure(handler) {
    handler(this);
  }
  map(routes) {
    this.routes = routes;
  }
}

describe('the Projects module', () => {
  var sut;
  beforeEach(() => { sut = new Projects(new RouterStub()); });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the heading', () => {
    expect(sut.heading).toEqual('Projects');
  });

  it('should have a todo list route', () => {
    expect(sut.router.routes).toContain({ route: ['','todo-list'],  moduleId: './todo-list', nav: true, title:'Todos' });
  });

  it('should have a mini twitter route', () => {
     expect(sut.router.routes).toContain({ route: 'mini-twitter', moduleId: './mini-twitter', nav: true, title: 'Mini Twitter' });
  });
});
