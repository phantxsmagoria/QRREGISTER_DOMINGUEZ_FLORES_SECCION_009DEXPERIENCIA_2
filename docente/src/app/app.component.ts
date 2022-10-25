import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      icon: 'home',
      name: 'Página Principal',
      redirecTo:'/decision'
    },

    {
      icon: 'scan-circle-outline',
      name: 'Escanear QR',
      redirecTo:'/escanear'
    },

    {
      icon:'checkbox-outline',
      name: 'Registro de asistencia',
      redirecTo:'/asistencia'
    },
        
    {
      icon:'log-out-outline',
      name: 'Cerrar sesión',
      redirecTo:'/logout'
    },
  ];



}
