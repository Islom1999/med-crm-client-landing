import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { Routes, RouterModule } from '@angular/router';
import { PageType } from '../../../enumerations';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    data: {page_type: PageType.list}
  },
  {
    path: 'doctor/:id',
    component: ServicesComponent,
    data: {page_type: PageType.list}
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
