import { Component, OnInit } from '@angular/core';
import{fromEvent} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {interval} from 'rxjs';
import {from} from 'rxjs';
import {of} from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.css']
})
export class ObservablesDemoComponent implements OnInit {


  fromEventLogs: string[] = [];
  ajaxLogs: string[]=[];
  intervalLogs:string[]=[];
  fromLogs:string[]=[];
  ofLogs:string[]=[];
  customObservableLogs:string[]=[];
  customObservable2Logs:string[]=[];
  customObservable3Logs:string[]=[];
  arrayCustomObservableLogs: string[] = [];


  constructor() { }

  ngOnInit() {

    /****    fromEvent    ****/
    const specialElement=document.getElementById('special-area');
    const mouseEventObservable= fromEvent(specialElement,'mousemove');
    const subscription= mouseEventObservable.subscribe(
      (evt:MouseEvent) => {
        this.fromEventLogs.push(`Coords: ${evt.clientX} X ${evt.clientY}`);

        if(evt.clientX < 250 && evt.clientY < 230){
          subscription.unsubscribe();
          this.fromEventLogs.push("unsubscribed from mouse events");

        }
      }
    );

    /***** ajax *****/
    let todosUrl = 'http://localhost:3000/todos';
    const todoObservable = ajax(todosUrl);

    todoObservable.subscribe(
      res => {
        console.log(res.status, res.response);
        this.ajaxLogs.push('Response came');
      }
    );

    /*****interval *****/
    const secondCounterObservable=interval(1000);
    secondCounterObservable.subscribe(
      n => this.intervalLogs.push(`It's been ${n} seconds since subscribing!` )
    );

    /*****from method *****/
    let number=[10,20,30,40,50];
    const arrayObservable=from(number);
    arrayObservable.subscribe(
      n => this.fromLogs.push(`${n}`)
    );

    /*****of method *****/
    const ofObservables=of(60,70,80,90);
    ofObservables.subscribe(
      n => this.ofLogs.push(`${n}`)
    );

    let customObservable=Observable.create(function(observer){
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      },1000);
    });

    customObservable.subscribe({
      next: n => this.customObservableLogs.push(` got value `+ n),
      error: err => this.customObservableLogs.push(`something went wrong:` + err),
      complete: () => this.customObservableLogs.push("done")
    });

    let customObservable2= new Observable(function(observer){
      observer.next(11);
      observer.next(22);
      observer.next(33);
      observer.next(44);
      setTimeout(() => {
        observer.next(55);
        observer.complete();
      },1000);
    });

    customObservable2.subscribe(
      n => this.customObservable2Logs.push(`got value ` + n),
      err => this.customObservable2Logs.push(`something went wrong` + err),
      () => this.customObservable2Logs.push("done")
    );

    let customObservable3=new Observable(function(observer){
      try{
        observer.next(111);
        observer.next(222);
        observer.next(333);
        observer.next(444);
        setTimeout(() => {
          observer.next(555);
          observer.complete();
        }, 1000);
      }
      catch(err)
      {
        observer.error(err);
      }
    });
    customObservable3.subscribe(
      n => this.customObservable3Logs.push(`got value`+ n),
      err => this.customObservable3Logs.push(`something went wrong`+ err),
      () => this.customObservable3Logs.push("done"),
    );

    let numbersarray=[1,2,3,4,5,6,7,8,9,10];
    let arrayCustomObservable=new Observable(function(observer){
      numbersarray.forEach(n => {
        observer.next(n)

      });
      observer.complete();
        
    });
    arrayCustomObservable.subscribe({
      next: x => this.arrayCustomObservableLogs.push('got value ' + x),
      error: err => this.arrayCustomObservableLogs.push('something wrong occurred: ' + err),
      complete: () => this.arrayCustomObservableLogs.push('done'),
    });


  }

}
