import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent
  },
  {
    path: 'doctor/:id',
    component: ServicesComponent
  }
];


@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(routes)
  ]
})
export class ServicesModule { }
