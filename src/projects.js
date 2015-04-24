import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Projects {
  heading = 'Projects';

  constructor(router){
    this.router = router;
    router.configure(config => {
      config.map([
        { route: ['', 'todo-list'], moduleId: './todo-list',  nav: true, title: 'Todos' },
        { route: 'mini-twitter', moduleId: './mini-twitter',  nav: true, title: 'Mini Twitter' }
      ]);
    });
  }
}
