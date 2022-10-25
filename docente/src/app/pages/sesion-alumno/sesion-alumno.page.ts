import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from 'src/app/service/registroservice.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-sesion-alumno',
  templateUrl: './sesion-alumno.page.html',
  styleUrls: ['./sesion-alumno.page.scss'],
})
export class SesionAlumnoPage implements OnInit {
  formularioLogin: FormGroup;
  usuarios : Usuario[] = [];



  constructor(private menuController: MenuController,
              private alertController: AlertController,
              private navController: NavController,
              private toastController: ToastController,
              private registrosService: RegistroserviceService,
              private fb: FormBuilder) {
                this.formularioLogin = this.fb.group({
                  'correo': new FormControl("",Validators.required),
                  'contraseña': new FormControl("",Validators.required),
                })
              }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async Ingresar(){
    var f = this.formularioLogin.value;
    var a = 0;
    var nom = '';
    this.registrosService.getUsuario().then(datos=>{
      this.usuarios=datos;
      if (datos.length==0)
      {
        return null;
      }

      for (let obj of this.usuarios){
        if (obj.correo == f.correo && obj.contraseña==f.contraseña){
          a=1;
          nom = 'Bienvenido ' + obj.nombre + ' '+obj.apellido;
          console.log('ingresado');
          localStorage.setItem('ingresado','true');
          this.showToast(nom);
          this.navController.navigateRoot('decision');
        }
      }
      console.log(a);
      if(a==0){
        this.alertMsg();
      }
    });
  }
  
  async alertMsg(){
    const alert = await this.alertController.create({
      header: '¡Error!',
      message: '¡Los datos ingresados no son correctos!',
      buttons: ['Aceptar'],
    });
    await alert.present();
    return;
  }

   async showToast(msg){ 
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    })
    await toast.present();
  }

  usuario = {
    email: '',
    password:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }


}
