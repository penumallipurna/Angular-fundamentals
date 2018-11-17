import { Component, OnInit } from '@angular/core';
import {CountingService} from '../counting.service';

@Component({
  selector: 'app-display-count',
  templateUrl: './display-count.component.html',
  styleUrls: ['./display-count.component.css']
})
export class DisplayCountComponent implements OnInit {

  count:number;


  constructor(private countingservice:CountingService) { }


  ngOnInit() {
   this.countingservice.counter$.subscribe(val => this.count=val);
  }

}
