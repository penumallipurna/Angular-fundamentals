import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './reactive/form-control/form-control.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { FormGroupComponent } from './reactive/form-group/form-group.component';
import { NestedFormGroupComponent } from './reactive/nested-form-group/nested-form-group.component';
import { FormBuilderComponent } from './reactive/form-builder/form-builder.component';
import { FormArrayComponent } from './reactive/form-array/form-array.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormControlComponent, FormGroupComponent, NestedFormGroupComponent, FormBuilderComponent, FormArrayComponent]
})
export class FormsDemoModule { }
