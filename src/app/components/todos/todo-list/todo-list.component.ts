import { Component, OnInit } from '@angular/core';
import {TodoListItem} from '../../../models';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  items: TodoListItem[] = [
    {description: 'Plant Herbs', completed: false},
    {description: 'Clean House', completed: true},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  markComplete(item: TodoListItem):void {
    item.completed = true;

  }

}
