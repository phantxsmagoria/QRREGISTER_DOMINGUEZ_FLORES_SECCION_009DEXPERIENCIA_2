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
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QRPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'sesion-docente',
    loadChildren: () => import('./pages/sesion-docente/sesion-docente.module').then( m => m.SesionDocentePageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'regdocente',
    loadChildren: () => import('./pages/regdocente/regdocente.module').then( m => m.RegdocentePageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'profe',
    loadChildren: () => import('./pages/profe/profe.module').then( m => m.ProfePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'feriados',
    loadChildren: () => import('./pages/feriados/feriados.module').then( m => m.FeriadosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
