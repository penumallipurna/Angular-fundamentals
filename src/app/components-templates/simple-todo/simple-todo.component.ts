import { Component, OnInit } from '@angular/core';
import {TodoServiceService} from './todo-service.service';

@Component({
  selector: 'app-simple-todo',
  templateUrl: './simple-todo.component.html',
  styleUrls: ['./simple-todo.component.css'],
  providers:[TodoServiceService]  
})
export class SimpleTodoComponent implements OnInit {

  userActions=[];
  constructor(private tracker:TodoServiceService) {
    this.tracker.todoObservable$.subscribe(todoActions=>
      {
        this.userActions.push(todoActions);
      });
   }

  ngOnInit() {
  }

  todos=[{id: 1,title:'pay power bill',done:false},
  {id: 2, title: 'pay phone bill',done:false},
  {id: 3, title: 'Talk to call center', done: false},
  {id: 4, title: 'Attend meeting', done: true},
  {id: 5, title: 'Deposit money', done: true}
];
}
