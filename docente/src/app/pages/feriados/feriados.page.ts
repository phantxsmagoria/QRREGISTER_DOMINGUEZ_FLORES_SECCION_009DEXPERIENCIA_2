import { Component, OnInit } from '@angular/core';
import { ServicioQRService } from '../../services/servicio-qr.service';
import { Datos } from '../../interfaces/interfaces';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  feriados: Datos[] = [];


  constructor( private feriado:ServicioQRService) { }

  ngOnInit() {

    this.feriado.obtenerFeriados().subscribe(resp => {
      console.log('feriados',resp);
      this.feriados.push(...resp.data)
    });

  }

}
