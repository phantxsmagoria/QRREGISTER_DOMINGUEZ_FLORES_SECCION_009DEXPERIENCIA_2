import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegalumnoPage } from './regalumno.page';

const routes: Routes = [
  {
    path: '',
    component: RegalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegalumnoPageRoutingModule {}
