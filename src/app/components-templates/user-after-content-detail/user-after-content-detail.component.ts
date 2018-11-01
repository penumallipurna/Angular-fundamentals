import { Component, OnInit, ContentChild, AfterContentInit, AfterContentChecked, DoCheck } from '@angular/core';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-after-content-detail',
  templateUrl: './user-after-content-detail.component.html',
  styleUrls: ['./user-after-content-detail.component.css']
})
export class UserAfterContentDetailComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked {

  constructor() { }

  ngOnInit() {
  }

  user = {
    name: 'John',
    age: 25
  };

  @ContentChild(EditUserComponent) editUserContent: EditUserComponent;

  ngDoCheck() {
    console.log("Do Check Called...!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
    console.log(this.editUserContent.user.name);
    console.log(this.editUserContent.user.age);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
    console.log(this.editUserContent.user.name);
    console.log(this.editUserContent.user.age);
    this.user.name = this.editUserContent.user.name;
    this.user.age = this.editUserContent.user.age;
  }

}
