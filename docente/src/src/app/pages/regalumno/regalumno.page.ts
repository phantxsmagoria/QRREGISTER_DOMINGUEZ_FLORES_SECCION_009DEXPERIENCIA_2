import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from 'src/app/service/registroservice.service';
import { ToastController } from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'



@Component({
  selector: 'app-regalumno',
  templateUrl: './regalumno.page.html',
  styleUrls: ['./regalumno.page.scss'],
})
export class RegalumnoPage implements OnInit {

  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};

  constructor(private alertController: AlertController,
              private menuController: MenuController,
              private toastController: ToastController,
              private registroService: RegistroserviceService,
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
          this.showtoast('!Datos Agregados');
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
  

  usuario = {
    primernombre:'',
    segundoombre:'',
    primerapellido:'',
    segundoapellido:'',
    edad:'',
    fechadenacimiento:'',
    carrera:'',
    semestre:'',
    email: '',
    password:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
