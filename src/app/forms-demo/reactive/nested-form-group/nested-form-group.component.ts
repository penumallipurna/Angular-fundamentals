import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-nested-form-group',
  templateUrl: './nested-form-group.component.html',
  styleUrls: ['./nested-form-group.component.css']
})
export class NestedFormGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.profileFormGroup.valueChanges.subscribe(changesObj => {
      console.log(changesObj);
    });
  }

  profileFormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  onSubmit() {
    console.log(this.profileFormGroup.value);
    console.log(this.profileFormGroup.status);
    console.log(this.profileFormGroup.valid);
  }

  updateFewProfileControls() {
    this.profileFormGroup.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  updateAllProfileControls() {
    this.profileFormGroup.setValue({
      firstName: 'John',
      lastName: 'Doe',
      address: {
        street: 'Some Street',
        city: 'Hyd',
        state: 'TS',
        zip: '' // In setValue method, we can pass empty values. But, we should not miss any form control.
      }
    });
  }


}
