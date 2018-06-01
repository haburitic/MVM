import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './forms/home/home.component';
import { GestionComponent } from './gestion/gestion.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },

  {
    path: 'Gestion',
    component: GestionComponent
  },
   {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
