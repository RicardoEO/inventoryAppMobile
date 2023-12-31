import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarPageRoutingModule } from './consultar-routing.module';

import { ConsultarPage } from './consultar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConsultarPage]
})
export class ConsultarPageModule {}
