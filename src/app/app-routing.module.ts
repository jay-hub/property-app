import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyListComponent } from './Components/property-list/property-list.component';
import { PropertyAssessComponent } from './Components/property-assess/property-assess.component';

const routes: Routes = [
  {path:'', component: PropertyListComponent},
  {path: 'property-assess/:propertyId', component: PropertyAssessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
