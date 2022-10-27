import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class ServicioQRService {

  constructor(private httpclient: HttpClient) { }

  obtenerFeriados(){
    return this.httpclient.get<RespuestaTopHeadlines>('https://api.victorsanmartin.com/feriados/en.json');
  }
}
