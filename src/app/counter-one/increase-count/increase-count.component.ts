import { Component, OnInit } from '@angular/core';
import {CountingService} from '../counting.service';

@Component({
  selector: 'app-increase-count',
  templateUrl: './increase-count.component.html',
  styleUrls: ['./increase-count.component.css']
})
export class IncreaseCountComponent implements OnInit {

  constructor(private countingservice:CountingService) { }

  ngOnInit() {
  }

  addOne(){
    this.countingservice.increment();

  }

}
