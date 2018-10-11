import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from '../index/index.component';
import {RouterModule,Routes} from '@angular/router';
import {DisplayDataInTemplateComponent} from '../components-templates/display-data-in-template/display-data-in-template.component'
import {DisplayDataInTemplateUrlComponent} from '../components-templates/display-data-in-template-url/display-data-in-template-url.component'
const appRouter:Routes=[
  {path :'index', component:IndexComponent},
  {path:'components-templates/display-data-in-template',component:DisplayDataInTemplateComponent},
  {path:'components-templates/dispaly-data-in-in-template-url',component:DisplayDataInTemplateUrlComponent}

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouter)
  ],
  declarations: []
})
export class AppRoutingModule { }
