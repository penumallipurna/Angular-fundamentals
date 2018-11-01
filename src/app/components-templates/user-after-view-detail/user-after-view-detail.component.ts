import { Component, OnInit, DoCheck, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-after-view-detail',
  templateUrl: './user-after-view-detail.component.html',
  styleUrls: ['./user-after-view-detail.component.css']
})
export class UserAfterViewDetailComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  constructor() { }

  user = {
    name: 'John',
    age: 25
  };

  @ViewChild(EditUserComponent) editUserView: EditUserComponent;

  ngOnInit() {
    // console.log(this.editUserView.user.name);
  }

  ngDoCheck() {
    console.log("Do Check Called...!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    console.log(this.editUserView.user.name);
    console.log(this.editUserView.user.age);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
    console.log(this.editUserView.user.name);
    console.log(this.editUserView.user.age);
    this.user.name = this.editUserView.user.name;
    this.user.age = this.editUserView.user.age;
  }

}
