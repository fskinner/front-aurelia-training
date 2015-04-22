import {inject} from 'aurelia-framework';
import {Todo} from './todo';

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

  remove(index) {
    todos.splice(index,1);
  }

  toggle_complete(todo) {
    if(todo.done) todo.not_done();
    else todo.complete();
  }
}
