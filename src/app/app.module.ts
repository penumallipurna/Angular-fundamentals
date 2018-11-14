import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router'
import{NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import{AppRoutingModule} from './app-routing/app-routing.module';
import{ComponentsTemplatesModule} from './components-templates/components-templates.module';
import {RxDemoModule} from '../app/rx-demo/rx-demo.module';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ComponentsTemplatesModule,
    NgbModule.forRoot(),
    RxDemoModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
