import { Component, OnInit } from '@angular/core';
import {of ,Observable, pipe} from 'rxjs';
import {map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-operators-demo',
  templateUrl: './operators-demo.component.html',
  styleUrls: ['./operators-demo.component.css']
})
export class OperatorsDemoComponent implements OnInit {

  squaredNumbersLogs: Array<number> = [];
  multipliedNumberLogs: Array<number> = [];
  oddFilteredLogs: Array<number> = [];
  squareOddLogs: Array<number> = []; 
  squaredOddLogs: Array<number> = [];
  constructor() { }

  ngOnInit() {
  

    // Created observable using of method
  let numbersObservable = of(1, 2, 3, 4, 5);

   /********* map operator simple demo ***********/
    // Configured map operator and map returned a function
  let squareValueMapFun = map((val:number )=> val* val);
  
    // Applied squareValuesMapFunc to numbersObservable. Returned new observable.
  let squareNumberedObservable=squareValueMapFun(numbersObservable)
  // Subscribed to squaredNumbersObservable
  squareNumberedObservable.subscribe(squaredNumber => this.squaredNumbersLogs.push(squaredNumber));

  
    /********* Custom operator: Multiply by given operator ***********/
    function multiplyByGiven(givenValue){
      return function multiplyByGivenFun(inputObservables){
        var outputObservable = Observable.create(function subscribe(observer){
          inputObservables.subscribe({
             next: (val) => observer.next(givenValue * val),
             error: (err) => observer.error(err),
             complete: () => observer.complete()
          });
        });
        return outputObservable;
      }
    }

    // Configured multiplyByGiven operator and it returned a function
    let multiplyByGivenFun = multiplyByGiven(10)
    // Applied squareValuesMapFunc to numbersObservable. Returned new observable.
    let multipliedNumbersObservable = multiplyByGivenFun(numbersObservable);
    // Subscribed to multipliedNumbersObservable
    multipliedNumbersObservable.subscribe(MultipliedNumber => this.multipliedNumberLogs.push(MultipliedNumber));

    /********* Applying map and filter operators ***********/
    let oddFilterFun = filter((val: number) => val%2 !==0);
    let oddFiltered$ = oddFilterFun(numbersObservable);

    let squareMapFun = map((val:number) => val * val);
    let oddSquaredNumbers$ = squareMapFun(oddFiltered$);

    oddSquaredNumbers$.subscribe(value => this.oddFilteredLogs.push(value));

    let squareOddValsPipeFunc = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );

    let squareOdd$ = squareOddValsPipeFunc(numbersObservable);

    squareOdd$.subscribe(x => this.squareOddLogs.push(x));

    /******** Applying pipe() on observable ***********/
    // The pipe() function is also a method on the RxJS Observable, so we can use it like below for same operation
    let squaredOddObservable = numbersObservable.pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );

    squaredOddObservable.subscribe(x => this.squaredOddLogs.push(x));

  }

}
