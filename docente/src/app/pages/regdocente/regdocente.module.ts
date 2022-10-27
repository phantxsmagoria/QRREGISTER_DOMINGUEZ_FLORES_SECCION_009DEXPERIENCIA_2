import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegdocentePageRoutingModule } from './regdocente-routing.module';

import { RegdocentePage } from './regdocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegdocentePageRoutingModule
  ],
  declarations: [RegdocentePage]
})
export class RegdocentePageModule {}
