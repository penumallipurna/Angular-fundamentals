import { Directive,forwardRef } from '@angular/core';
import { AbstractControl,NG_ASYNC_VALIDATORS } from '@angular/forms';
import {UniqueUserNameValidator} from './unique-user-name.async-validator';

@Directive({
  selector: '[appUniqueUserNameAsyncValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueUserNameValidator),
      multi: true
    }
  ]
})
export class UniqueUserNameAsyncValidatorDirective {

  constructor(private userNameValidator: UniqueUserNameValidator) { }

  validate(control: AbstractControl) {
    this.userNameValidator.validate(control);  
  }
}
