import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegdocentePage } from './regdocente.page';

const routes: Routes = [
  {
    path: '',
    component: RegdocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegdocentePageRoutingModule {}
