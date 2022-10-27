import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './guards/no-ingresado.guard'; 
import { IngresadoGuard } from './guards/ingresado.guard';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'sesion-alumno',
    loadChildren: () => import('./pages/sesion-alumno/sesion-alumno.module').then( m => m.SesionAlumnoPageModule),
    canActivate: [NoIngresadoGuard]
  },

  {
    path: 'regalumno',
    loadChildren: () => import('./pages/regalumno/regalumno.module').then( m => m.RegalumnoPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'decision',
    loadChildren: () => import('./pages/decision/decision.module').then( m => m.DecisionPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'escanear',
    loadChildren: () => import('./pages/escanear/escanear.module').then( m => m.EscanearPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
