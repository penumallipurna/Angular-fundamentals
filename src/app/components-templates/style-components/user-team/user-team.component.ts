import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-team',
  templateUrl: './user-team.component.html',
  styleUrls: ['./user-team.component.css']
})
export class UserTeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() user;

}
