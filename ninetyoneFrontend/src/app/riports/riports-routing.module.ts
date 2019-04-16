import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiportsComponent } from './riports/riports.component';

const routes: Routes = [
  {
    path: '',
    component: RiportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiportsRoutingModule { }
