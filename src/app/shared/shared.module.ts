import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenNameValidatorDirective } from './validators/forbidden-name-validator.directive';
import { UniqueUserNameAsyncValidatorDirective } from './validators/unique-user-name-async-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ForbiddenNameValidatorDirective, UniqueUserNameAsyncValidatorDirective],
  exports:[ForbiddenNameValidatorDirective ,UniqueUserNameAsyncValidatorDirective]
})
export class SharedModule { }
