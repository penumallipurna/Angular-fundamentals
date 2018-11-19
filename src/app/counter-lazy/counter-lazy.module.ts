import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { CounterLazyRoutingModule } from './counter-lazy-routing.module';
import { CounterHomeComponent } from './counter-home/counter-home.component';
import {CounterOneModule} from '../counter-one/counter-one.module';

@NgModule({
  imports: [
    CommonModule,
    CounterLazyRoutingModule,
    CounterOneModule,
    FormsModule
  ],
  declarations: [CounterHomeComponent]
})
export class CounterLazyModule { }
