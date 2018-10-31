import { Component, OnInit, Input } from '@angular/core';
import {TodoServiceService} from '../simple-todo/todo-service.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  constructor(private tracker:TodoServiceService) { }

  ngOnInit() {
  }

  @Input() todo;

  toggle(){
    this.todo.done=!this.todo.done;
    this.tracker.track(this.todo);

  }
}
