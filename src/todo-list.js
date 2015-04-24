import {inject} from 'aurelia-framework';
import {Todo} from './todo';
import _ from 'lodash';

@inject(Todo)
export class TodoList {
  todos = [];
  todo_text = "";

  add() {
    if(this.todo_text) {
      let item = new Todo(this.todo_text);
      this.todos.push(item);
      this.todo_text = "";
    }

    return false;
  }

  remove_completed() {
  this.todos =  _.where(this.todos, {'done': false});
  }

  toggle_complete(todo) {
    if(todo.done) todo.not_done();
    else todo.complete();
  }

  get summary() {
    return _.where(this.todos, {'done': false}).length;
  }
}
