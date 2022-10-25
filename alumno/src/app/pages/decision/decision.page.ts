import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.page.html',
  styleUrls: ['./decision.page.scss'],
})
export class DecisionPage implements OnInit {

  constructor(private menuController: MenuController,
              private storageModule: IonicStorageModule,
              private navController: NavController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');

  }
  async cerrarSesion(){
    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('inicio');
  }

  async cerrar(){
    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('inicio');
  }

}
