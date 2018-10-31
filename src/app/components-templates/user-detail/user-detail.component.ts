import { Component, OnInit, ContentChild, AfterContentChecked } from '@angular/core';
import{EditUserComponent} from '../edit-user/edit-user.component';
  

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit,AfterContentChecked {

  user={
    name:'purna',
    age:26
  }
  constructor() { }

  ngOnInit() {
  }
  @ContentChild(EditUserComponent) editusercontent:EditUserComponent;

   ngAfterContentChecked(){

    console.log(this.editusercontent.user.name);

    this.user.name=this.editusercontent.user.name;
    this.user.age=this.editusercontent.user.age;
  }
 
}
