import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RrhhPageRoutingModule } from './rrhh-routing.module';

import { RrhhPage } from './rrhh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RrhhPageRoutingModule
  ],
  declarations: [RrhhPage]
})
export class RrhhPageModule {}
