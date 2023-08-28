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
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserloggedPageRoutingModule {}
