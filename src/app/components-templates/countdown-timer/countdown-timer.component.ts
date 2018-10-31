import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {

  IntervalId=0;
  message="";
  seconds=11;
  
  clearTimer(){clearInterval(this.IntervalId)};

  constructor() { }

  ngOnInit( ){this.start() }
  ngOnDestroy(){this.clearTimer()}

  start(){this.countDown();}
  stop(){
    this.clearTimer();
    this.message= `Holding at T-${this.seconds} seconds`;
  }

  countDown(){

    this.clearTimer();
    this.IntervalId=window.setInterval(() => {
      this.seconds-=1;
      if(this.seconds === 0)
      {
        this.message='Blast off!';
      }
      else
      {
        if(this.seconds < 0)
        {
          this.seconds=10;
        }
        this.message=`T-${this.seconds} seconds and counting`
      }
    },1000);
  }





}
