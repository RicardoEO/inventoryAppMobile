import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserloggedPage } from './userlogged.page';

const routes: Routes = [
  {
    // ROUTER + MENU
    path: '',
    component: UserloggedPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'consultar',
        loadChildren: () => import('../consultar/consultar.module').then( m => m.ConsultarPageModule)
      },
      {
        path: 'crear',
        loadChildren: () => import('../crear/crear.module').then( m => m.CrearPageModule)
      },
      {
        path: 'crear/:id',
        loadChildren: () => import('../crear/crear.module').then( m => m.CrearPageModule)
      },
      {
        path: 'rrhh',
        loadChildren: () => import('../rrhh/rrhh.module').then( m => m.RrhhPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserloggedPageRoutingModule {}
