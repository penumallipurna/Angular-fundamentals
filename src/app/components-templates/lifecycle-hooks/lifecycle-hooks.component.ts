import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  created = false;

  user = {
    name: 'John',
    age: 25
  };

  otherUser = {
    name: 'Michael',
    age: 30
  };

  currentUser = this.user;

  changeCurrentUser() {
    this.currentUser = this.otherUser;
  }

  changeCurrentUserName() {
    this.currentUser.name = 'Chris';
  }


}
