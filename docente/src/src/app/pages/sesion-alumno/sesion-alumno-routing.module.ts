import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SesionAlumnoPage } from './sesion-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: SesionAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesionAlumnoPageRoutingModule {}
