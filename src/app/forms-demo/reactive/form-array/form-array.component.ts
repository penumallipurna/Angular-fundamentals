import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

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
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileFormGroup.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

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
      },
      aliases:['John', 'Doe', 'Dude']
    });
  }


}
