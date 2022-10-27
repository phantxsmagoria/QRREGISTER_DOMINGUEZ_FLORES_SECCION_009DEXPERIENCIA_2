import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, MenuController } from '@ionic/angular';
import { AlertController} from '@ionic/angular';
import { RegistroServiceService, Usuario } from 'src/app/services/registro-service.service';
import { ToastController} from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-regdocente',
  templateUrl: './regdocente.page.html',
  styleUrls: ['./regdocente.page.scss'],
})
export class RegdocentePage implements OnInit {

  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};

  constructor(private menuController: MenuController,
              private alertController: AlertController,
              private toastController: ToastController,
              private registroService: RegistroServiceService,
              private fb: FormBuilder) {
                this.formularioRegistro = this.fb.group({
                  'nombre': new FormControl("", Validators.required),
                  'correo': new FormControl("", [Validators.required, Validators.email]),
                  'contraseña': new FormControl("", Validators.required),
                  'confirmar': new FormControl("", Validators.required),
                  'apellido' : new FormControl("",Validators.required),
                });
              }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async CrearUsuario(){
    var form= this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Debe completar todos los datos',
        buttons: ['Aceptar'],
      });
      await alert.present();
      return;
    }
    else {
      if(form.confirmar!=form.contraseña){
        this.alertError();

      }
      else{

        this.newUsuario.nombre = form.nombre,
        this.newUsuario.correo = form.correo,
        this.newUsuario.contraseña = form.contraseña,
        this.newUsuario.confirmar = form.confirmar,
        this.newUsuario.apellido = form.apellido,
        this.registroService.addDatos(this.newUsuario).then(dato =>{
          this.newUsuario = <Usuario>{};
          this.showtoast('¡Datos Agregados!');
        });

      }
    }
  }

  async alertError() {
    const alerta = await this.alertController.create({
      header: 'Las contraseñas no coinciden.',
      message: ' Verifique contraseña nuevamente. ',
      buttons: ['Aceptar']
    }) 
    await alerta.present();
  }



  async showtoast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
