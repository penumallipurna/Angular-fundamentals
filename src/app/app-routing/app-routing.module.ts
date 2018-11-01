import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from '../index/index.component';
import {RouterModule,Routes} from '@angular/router';
import {DisplayDataInTemplateComponent} from '../components-templates/display-data-in-template/display-data-in-template.component';
import {DisplayDataInTemplateUrlComponent} from '../components-templates/display-data-in-template-url/display-data-in-template-url.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TemplateSyntaxComponent} from '../components-templates/template-syntax/template-syntax.component';
import {CustomEventsComponent} from '../components-templates/custom-events/custom-events.component';
import { TwoWayBindingComponent } from "../components-templates/two-way-binding/two-way-binding.component";
import {DirectivesComponent} from '../components-templates/directives/directives.component';
import {InputTestComponent} from '../components-templates/input-test/input-test.component';
import {InteractionComponent} from '../components-templates/interaction/interaction.component';
import {LifecycleHooksComponent} from '../components-templates/lifecycle-hooks/lifecycle-hooks.component';
import {LifecycleViewHooksComponent} from '../components-templates/lifecycle-view-hooks/lifecycle-view-hooks.component';

const appRouter:Routes=[

  {path :'index', component: IndexComponent},
  {path:'components-templates/display-data-in-template',component:DisplayDataInTemplateComponent},
  {path:'components-templates/display-data-in-template-url',component:DisplayDataInTemplateUrlComponent},
  {path:'components-templates/template-syntax',component:TemplateSyntaxComponent},
  {path: 'components-templates/template-syntax/custom-events',component:CustomEventsComponent},
  {path:'components-templates/template-syntax/two-way-binding',component:TwoWayBindingComponent},
  {path:'components-templates/directives',component:DirectivesComponent},
  {path:'components-templates/input-test',component:InputTestComponent},
  {path:'components-templates/interaction',component:InteractionComponent},
  {path:'components-templates/lifecycle-hooks',component:LifecycleHooksComponent},
  {path: 'components-templates/lifecycle-hooks/view-hooks',component:LifecycleViewHooksComponent },
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path:'**' ,component:PageNotFoundComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouter)
  ],
  declarations: [PageNotFoundComponent]
})
export class AppRoutingModule { }
