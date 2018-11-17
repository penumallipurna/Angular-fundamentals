import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { EagerVsLazyLoadingComponent } from './eager-vs-lazy-loading/eager-vs-lazy-loading.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [EagerVsLazyLoadingComponent]
})
export class ModulesDemoModule { }
