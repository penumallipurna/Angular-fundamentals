import { Directive,Input } from '@angular/core';
import {forbiddenNameValidator} from './forbidden-name.validator';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appForbiddenNameValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenNameValidatorDirective, multi: true}]
})
export class ForbiddenNameValidatorDirective implements Validator {

  constructor() { }

  @Input() forbiddenNames: string[];

  validate(control: AbstractControl):object | null {
    return forbiddenNameValidator(this.forbiddenNames)(control);
  }
}
