import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

@inject(Router)
export class App {
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: '',         moduleId: './home',     nav: true, title: 'Home' },
        { route: 'welcome',  moduleId: './welcome',  nav: true, title: 'Welcome' },
        { route: 'flickr',   moduleId: './flickr',   nav: true },
        { route: 'projects', moduleId: './projects', nav: true, title: 'Projects' }
      ]);
    });
  }
}
