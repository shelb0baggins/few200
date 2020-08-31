import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.scss']
})
export class TodoEntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  add(descriptionEl: HTMLInputElement): void {
    // create new todo
    // do something w it
    // clear out text in input
    descriptionEl.value = '';
    descriptionEl.focus();
  }
}
