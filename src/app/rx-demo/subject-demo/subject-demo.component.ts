import { Component, OnInit } from '@angular/core';
import {SubjectsDemoService} from '../subjects-demo.service';
import {Observable, Subject, observable} from 'rxjs';

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
  this.subjectObservableLogs.push(`At ${((Date.now()-initTime)/1000).toFixed(1)} seconds:observable1:${n}`)

  });

  setTimeout(() => {
    this.SubjectsDemoService.numbersSubject.subscribe(n=>{
      this.subjectObservableLogs.push(`At ${((Date.now()-initTime)/1000).toFixed(1)} seconds:observable2:${n}`);
    })
  }, 1500);
  }

  


}
