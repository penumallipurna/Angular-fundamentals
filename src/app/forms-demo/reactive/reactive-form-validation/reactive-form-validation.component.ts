import { Component, OnInit } from '@angular/core';
import {FormArray,FormBuilder,FormGroup, Validators} from '@angular/forms';
import {forbiddenNameValidator} from '../../../shared/validators/forbidden-name.validator';
import {UniqueUserNameValidator} from '../../../shared/validators/unique-user-name.async-validator';
import {checkboxRequiredValidator} from '../../../shared/validators/checkbox-required.validator';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent implements OnInit {

  constructor(private fb: FormBuilder,private uniqueUserNameValidator:UniqueUserNameValidator) { }

  power =['Really smart','Super flexible','Weather changer']

  vehiclesArr=[
    {label:'Two wheeler',value:'two wheeler',Selected:false},
    {label:'Four wheeler',value:'four wheeler',Selected:false},
    {label:'Private chooper',value:'private-chooper',Selected:false},
    {label:'Private plain',value:'private-plain',Selected:false}
  ];

  heroFormGroup: FormGroup;

  ngOnInit() {
    this.heroFormGroup=this.fb.group({
      'name':['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      'alterEgo':[''],
      'power':['',Validators.required],
      'email':['',[Validators.required,Validators.email]],
      'secondaryEmail':['',Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')],
      'available':['',Validators.required],
      'nickName':['',[Validators.required,forbiddenNameValidator(['Tom','Bob','Tommy'])]],
      'userName':['',[Validators.required],this.uniqueUserNameValidator.validate.bind(this.uniqueUserNameValidator)],
      'vehicles': this.buildVehicleCheckBoxControls(),

    });

    this.heroFormGroup.valueChanges.subscribe(changeObj => {
      console.log(this.heroFormGroup);
    });
  }

  buildVehicleCheckBoxControls() {
    let vehicleCheckBoxControls = [];
    this.vehiclesArr.forEach(vehicle => {
      let control = this.fb.control(vehicle.Selected);
      vehicleCheckBoxControls.push(control);
    });
    return new FormArray(vehicleCheckBoxControls, checkboxRequiredValidator());
  }

  get name(){return this.heroFormGroup.get('name');}

  get alterEgo(){return this.heroFormGroup.get('alterEgo');}

  get powers(){return this.heroFormGroup.get('power');}

  get email(){return this.heroFormGroup.get('email');}

  get secondaryEmail(){return this.heroFormGroup.get('secondaryEmail');}

  get nickName() {return this.heroFormGroup.get('nickName');}

  get userName(){return this.heroFormGroup.get('userName');}

  get available(){return this.heroFormGroup.get('available');}

  get vehicles() { return this.heroFormGroup.get('vehicles'); }

  onSubmit() {
    console.log(this.heroFormGroup.value);
    let payload = { ...this.heroFormGroup.value };
    payload.vehicles = this.getVehicleValues(payload.vehicles);
    console.log(payload);
  }

  getVehicleValues(checkboxValues: Boolean[]) {
    let values: string[] = [];
    checkboxValues.forEach((val, index) => {
      if(val) {
        values.push(this.vehiclesArr[index].value);
      }
    });
    return values;
  }

}
