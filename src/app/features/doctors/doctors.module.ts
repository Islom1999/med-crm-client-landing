import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './doctors.component';
import { Routes, RouterModule } from '@angular/router';
import { PageType } from '../../../enumerations';

const routes: Routes = [
  {
    path: '',
    component: DoctorsComponent,
    data: {page_type: PageType.list}
  },
];


@NgModule({
  declarations: [
    DoctorsComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(routes)
  ]
})
export class DoctorsModule { }
