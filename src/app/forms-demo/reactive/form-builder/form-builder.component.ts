import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileFormGroup.valueChanges.subscribe(changesObj => {
      console.log(changesObj);
    });
  }

  profileFormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
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
