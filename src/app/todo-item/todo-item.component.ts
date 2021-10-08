import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  tittle = 'TODO APP';
  todo: any[] = [];
  todoTitle = '';
  checkBox: boolean = false;
  isEdit = false;
  index = 0;
  tittless = '';
  id: any = '';

  add() {
    if (!this.isEdit) {
      this.todo.push({
        id: this.todo.length,
        name: this.todoTitle,
        isChecked: false,
      });
    } else {
      this.todo.map((t) => {
        if (t.id == this.id) {
          t.name = name;
          t.name = this.todoTitle;
        }
      });
    }
  }
  onChange($event: any) {
    const id = $event.target.value;
    const select = $event.target.checked;
    console.log(this.todo);
    this.todo.map((d) => {
      if (d.id == id) {
        d.isChecked = select;
        console.log(select);
        return id;
      }
    });
  }
  delete(i: number) {
    this.todo.splice(i, 1);
  }
  edit(name: string, index: number, $event: any) {
    this.isEdit = true;
    const id = $event.target.value;
    const tittless = $event.target.ngModel;
    this.id = id;
    this.todoTitle = tittless;
    this.index = index;
    console.log(this.index);
  }
  constructor() {}

  ngOnInit(): void {}
}
