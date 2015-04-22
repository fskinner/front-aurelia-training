export class Todo {
  constructor(text, done = false) {
    this.text = text;
    this.done = done;
  }

  complete() {
    this.done = true;
  }

  not_done() {
    this.done = false;
  }
}
