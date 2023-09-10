import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RrhhPage } from './rrhh.page';

const routes: Routes = [
  {
    path: '',
    component: RrhhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RrhhPageRoutingModule {}
