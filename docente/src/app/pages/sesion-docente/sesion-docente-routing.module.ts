import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SesionDocentePage } from './sesion-docente.page';

const routes: Routes = [
  {
    path: '',
    component: SesionDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesionDocentePageRoutingModule {}
