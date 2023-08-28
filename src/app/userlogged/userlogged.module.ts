import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserloggedPageRoutingModule } from './userlogged-routing.module';

import { UserloggedPage } from './userlogged.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserloggedPageRoutingModule
  ],
  declarations: [UserloggedPage]
})
export class UserloggedPageModule {}
