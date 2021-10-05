import { ConstantPool } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

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

  Add() {
    if (!this.isEdit) {
      if (this.todo != '') {
        //check input field is not null
        this.todoList.push(this.todo);
        localStorage.setItem(
          'todos',
          JSON.stringify(this.todoList) // save todolist in local storage
        );
      }

      this.todo = ''; //when edit input after add button again input field is null

      this.isEdit = false; // make again isEdit false
    } else {
      this.todoList[this.index] = this.todo; //here is when we click on edit button edit text appear in input field
      this.todo = ''; // make input clear after add button
      this.isEdit = false;
    }
  }

  Delete(i: number): void {
    // delete methode todolist
    console.log(i);
    this.todoList.splice(i, 1);
    localStorage.removeItem('todos[i]');
  }
  Edit(name: string, index: number): void {
    this.isEdit = true; //isedit true when click on edit button
    this.todo = name; // name is x in html we put "x" of array
    this.index = index; //pass index argument from html
  }
  checkClickChange() {
    this.isChecked = true;
    console.log(this.isChecked);
    if (this.isChecked == true) {
      this.taskCount = this.taskCount + 1;
    }
    this.showStatus = this.todoList.length - this.taskCount;
    console.log(this.showStatus);
  }
  check() {}

  constructor() {}

  ngOnInit(): void {
    this.todoList = JSON.parse(localStorage.getItem('todos') || '[]  ');
    console.log(this.value);
  }
}
