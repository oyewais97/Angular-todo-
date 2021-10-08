import { ConstantPool } from '@angular/compiler';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todo: string = '';
  index: number = 0;
  todoList: string[] = [];
  taskCount = 0;
  isChecked = false;
  diplayList: string = '';
  isEdit = false;
  showStatus = 0;
  saveUsername: boolean = false;
  value: string[] = [];
  yes = '';
  checkbox: boolean[] = [];
  add() {
    if (!this.isEdit) {
      if (this.todo != '') {
        this.todoList.push(this.todo);
        this.value = this.todoList;
        //check input field is not null
        this.isEdit = false;
        localStorage.setItem(
          'todos',
          JSON.stringify(this.todoList) // save todolist in local storage
        );
        // console.log(this.value);
      }

      this.todo = ''; //when edit input after add button again input field is null
      console.log(!this.Edit);
      // make again isEdit false
    } else {
      this.todoList[this.index] = this.todo;
      console.log(this.todoList[this.index]); //here is when we click on edit button edit text appear in input field
      this.todo = ''; // make input clear after add button
      console.log('this is todo' + this.todo);
      console.log(`this is todolist index${this.todoList[this.index]}`);
      console.log(`this is edit now ${this.isEdit}`);

      localStorage.setItem(
        'todos',
        JSON.stringify(this.todoList) // save todolist in local storage
      );
      this.isEdit = false;
      // console.log(this.isEdit);
    }
  }

  Delete(name: string, i: number): void {
    this.todoList.splice(i, 1);
    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(this.todoList));
    localStorage.removeItem('check');
    localStorage.setItem('check', JSON.stringify(this.checkbox));
    // let val = JSON.parse(localStorage.getItem('todos') || ' []');
    // for (i = 0; i < this.todoList.length; i++) {
    //   if (val == i) {
    //     val.splice(i, 1);
    //   }
    // }
  }
  Edit(name: string, index: number): void {
    this.isEdit = !this.isEdit; //isedit true when click on edit button
    this.todo = name; // name is x in html we put "x" of array
    this.index = index; //pass index argument from html
    // console.log(this.todo);
  }
  onChange(i: number, $event: any) {
    const id = $event.target.value;
    const select = $event.target.checked;

    this.checkbox.push(select);
    localStorage.setItem(
      'check',
      JSON.stringify(this.checkbox) // save todolist in local storage
    );

    // for (i = 0; i < this.todoList.length; i++) {
    //   if (this.isChecked == false) {
    //     this.isChecked = !this.isChecked;
    //     this.checkbox[i] = this.isChecked;
    //   }
    // }
  }
  // console.log(this.isChecked);
  // //   if ((this.isChecked = !this.isChecked)) {
  // //     this.taskCount = this.taskCount + 1;
  // //   }
  // //   this.showStatus = this.todoList.length - this.taskCount;
  // //   console.log(this.showStatus);
  // // }
  check(i: number) {
    // console.log(this.isChecked);
  }

  constructor() {}

  ngOnInit(): void {
    if (this.todoList != null) {
      this.todoList = JSON.parse(localStorage.getItem('todos') || ' []');

      // this.todoList = JSON.parse(localStorage.getItem('todoy') || '[]  ');
    }
    this.checkbox = JSON.parse(localStorage.getItem('check') || '[]');
    console.log(this.checkbox);
    console.log(this.checkbox);
    // console.log('hello', this.todoList);
    // if (!this.isEdit) {
    //   localStorage.setItem(
    //     'todos',
    //     JSON.stringify(this.value) // save todolist in local storage
    //   );
    //   console.log(this.value);
    // } else {
    //   localStorage.setItem(
    //     'todos',
    //     JSON.stringify(this.value) // save todolist in local storage
    //   );
    //   console.log(this.value);
    // }
  }
}
