import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalComponent } from './hospital.component';
import { Routes, RouterModule } from '@angular/router';
import { CommentsSliderComponent } from './components/comments-slider/comments-slider.component';

const routes: Routes = [
  {
    path: '',
    component: HospitalComponent
  }
];


@NgModule({
  declarations: [
    HospitalComponent,
  ],
  imports: [
		CommentsSliderComponent,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HospitalModule { }
