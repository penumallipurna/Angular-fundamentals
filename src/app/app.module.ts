import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import{AppRoutingModule} from './app-routing/app-routing.module';
import{ComponentsTemplatesModule} from './components-templates/components-templates.module'

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsTemplatesModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
