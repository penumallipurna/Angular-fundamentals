import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-controls',
  templateUrl: './user-controls.component.html',
  styleUrls: ['./user-controls.component.css']
})
export class UserControlsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() user;

  activate() {
    this.user.active = true;
  }


}
