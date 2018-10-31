import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {


  constructor() { }
  private todosubject=new Subject();

  todoObservable$=this.todosubject.asObservable();

 track(todo)
 {
   let action=`${todo.title} is ${todo.done ? `` : `not`} completed`;
   this.todosubject.next(action);
 }
}
