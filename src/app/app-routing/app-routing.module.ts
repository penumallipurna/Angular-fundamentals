import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from '../index/index.component';
import {RouterModule,Routes} from '@angular/router';
import {DisplayDataInTemplateComponent} from '../components-templates/display-data-in-template/display-data-in-template.component'
import {DisplayDataInTemplateUrlComponent} from '../components-templates/display-data-in-template-url/display-data-in-template-url.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TemplateSyntaxComponent} from '../components-templates/template-syntax/template-syntax.component';
const appRouter:Routes=[
  {path :'index', component: IndexComponent},
  {path:'components-templates/display-data-in-template',component:DisplayDataInTemplateComponent},
  {path:'components-templates/dispaly-data-in-in-template-url',component:DisplayDataInTemplateUrlComponent},
  {path:'components-templates/template-syntax',component:TemplateSyntaxComponent},
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {path:'**' ,component:PageNotFoundComponent}

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouter)
  ],
  declarations: []
})
export class AppRoutingModule { }
