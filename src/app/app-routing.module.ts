import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../app/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('../app/userlogged/userlogged.module').then( m => m.UserloggedPageModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  },
  {
    path: 'rrhh',
    loadChildren: () => import('./rrhh/rrhh.module').then( m => m.RrhhPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
