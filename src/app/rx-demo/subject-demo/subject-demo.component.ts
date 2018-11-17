import { Component, OnInit } from '@angular/core';
import {SubjectsDemoService} from '../subjects-demo.service';
import {Observable, Subject,from,BehaviorSubject,ReplaySubject,AsyncSubject} from 'rxjs';

@Component({
  selector: 'app-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.css']
})
export class SubjectDemoComponent implements OnInit {

  constructor(public SubjectsDemoService:SubjectsDemoService) { }

  observableLogs:string[]=[];
  subjectLogs:string[]=[];
  subjectObservableLogs:string[]=[];
  namesSubjectLogs:string[]=[];
  regularSubjectLogs:string[]=[];
  behavoiurSubjectLogs:string[]=[];
  replaySubjectLogs:string[]=[];
  asyncSubjectLogs:string[]=[];

  ngOnInit() {
    let initTime=Date.now();
    this.SubjectsDemoService.numbersObservable$.subscribe(n=>{
      this.observableLogs.push(`At ${((Date.now()-initTime)/1000).toFixed(1)} seconds:Observer1:${n} `);
    });
    setTimeout(() => {
      this.SubjectsDemoService.numbersObservable$.subscribe(n=>{
        this.observableLogs.push(`At ${((Date.now()-initTime)/1000).toFixed(1)} seconds:Observer2:${n}`);
      })
    }, 1500);

    this.SubjectsDemoService.numbersSubject.subscribe(n => {
      this.subjectLogs.push(`At ${((Date.now()-initTime)/1000).toFixed(1)} seconds:Observable1:${n}`);
    });
    setTimeout(() => {
      this.SubjectsDemoService.numbersSubject.subscribe(n =>{
      this.subjectLogs.push(`At ${((Date.now()-initTime)/1000).toFixed(1)} seconds:Observable2:${n}`);
    });
  },1500);
  

  this.SubjectsDemoService.numbersSubjectObservable$.subscribe(n =>{
  this.subjectObservableLogs.push(`At ${((Date.now()-initTime)/1000).toFixed(1)} seconds:observer1:${n}`)

  });

  setTimeout(() => {
    this.SubjectsDemoService.numbersSubject.subscribe(n=>{
      this.subjectObservableLogs.push(`At ${((Date.now()-initTime)/1000).toFixed(1)} seconds:observer2:${n}`);
    })
  }, 1500);

  let names:Array<string> = ['purna','chandra','penumalli'];
  let namesSubject:Subject<string>=new Subject<string>();

  namesSubject.subscribe(n=>{
    this.namesSubjectLogs.push(`At ${((Date.now()-initTime)/1000).toFixed(1)} seconds:observer1 ${n}`)
  });

  namesSubject.subscribe(n =>{
    this.namesSubjectLogs.push(`At ${((Date.now()-initTime)/1000).toFixed(1)} seconds:observer2:${n}`)
  });

  let namesObservable:Observable<string> = from(names);
  namesObservable.subscribe(namesSubject);

  /*****Types of subjects******/

  //regular subject
  let regularSubject=new Subject();
  regularSubject.subscribe(
    n => this.regularSubjectLogs.push(`observer1:`+ n)
  );
  regularSubject.next(1);
  regularSubject.next(2);

  regularSubject.subscribe(
    n => this.regularSubjectLogs.push(`observer2:` + n)
  )
  regularSubject.next(3);
  regularSubject.next(4);

  //behaviour subject
  let behaviorSubject= new BehaviorSubject(0);
  behaviorSubject.subscribe(
    n =>this.behavoiurSubjectLogs.push(`observer1:` + n)
  )
  behaviorSubject.next(1);
  behaviorSubject.next(2);

  behaviorSubject.subscribe(
    n =>this.behavoiurSubjectLogs.push(`observer2:` + n)
  )
  behaviorSubject.next(3);
  behaviorSubject.next(4);

  //replay subject 
  let replaySubject= new ReplaySubject();
  replaySubject.subscribe(
    n => this.replaySubjectLogs.push(`observer1:` + n)
  )
  replaySubject.next(1);
  replaySubject.next(2);
  replaySubject.next(3);
  replaySubject.next(4);

  replaySubject.subscribe(
    n => this.replaySubjectLogs.push(`observer2:` + n)
  )
  replaySubject.next(5);

  let asyncSubject=new AsyncSubject();
  asyncSubject.subscribe(
    n => this.asyncSubjectLogs.push(`observer1:`+ n)
  )
  asyncSubject.next(1);
  asyncSubject.next(2);
  asyncSubject.next(3);
  asyncSubject.next(4);

  asyncSubject.subscribe(
    n => this.asyncSubjectLogs.push(`observer2:`+ n)
  )
  asyncSubject.next(5);
  asyncSubject.complete();

  }

  


}
