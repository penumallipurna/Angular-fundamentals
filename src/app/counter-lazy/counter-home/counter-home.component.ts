import { Component, OnInit } from '@angular/core';
import {UtilService} from '../../core/util.service';

@Component({
  selector: 'app-counter-home',
  templateUrl: './counter-home.component.html',
  styleUrls: ['./counter-home.component.css']
})
export class CounterHomeComponent implements OnInit {

  constructor(private util:UtilService) { }

  username:string;

  ngOnInit() {
    this.util.userName$.subscribe(val=> this.username=val);
  }
  updateUserName(){
    this.util.updateUserName(this.username);
  }

}
