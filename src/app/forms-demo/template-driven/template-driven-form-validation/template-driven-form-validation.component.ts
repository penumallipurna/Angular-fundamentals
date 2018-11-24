import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-validation',
  templateUrl: './template-driven-form-validation.component.html',
  styleUrls: ['./template-driven-form-validation.component.css']
})
export class TemplateDrivenFormValidationComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  vehiclesArr = [
    {label:"Two Wheeler", value: 'two-wheeler', selected: false},
    {label:"Four Wheeler", value: 'four-wheeler', selected: false},
    {label:"Private Chopper", value: 'private-chopper', selected: false},
    {label:"Private Plain", value: 'private-plain', selected: false}
  ];

  heroObj = {
    'name': '',
    'alterEgo': '',
    'power': '',
    'email': '',
    'seconderyEmail': '',
    'available': 'yes',
    'nickName': '',
    'userName': '',
    'vehicles': []
  };

  forbiddenNames: string[] = ['Bob', 'Tim', 'Tommy'];

  constructor() { }

  ngOnInit() {}

  onSubmit(heroForm) {
    console.log(heroForm);
    console.log(heroForm.value);
    console.log(this.heroObj);
    console.log(this.vehiclesArr);
    this.heroObj.vehicles = [];
    this.vehiclesArr.forEach(val => {
      if(val.selected) this.heroObj.vehicles.push(val.value); 
    });
    console.log(this.heroObj);
  }


}
