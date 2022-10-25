import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor( private navController: NavController) { }

  ngOnInit() {

    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('inicio');
  }

}
