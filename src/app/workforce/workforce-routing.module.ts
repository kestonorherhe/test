
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkforceComponent } from './workforce/workforce.component'

const routes: Routes = [
 { path:"workforce", component:WorkforceComponent }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkforceRoutingModule { }
