import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})
export class MainUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() user;

}
