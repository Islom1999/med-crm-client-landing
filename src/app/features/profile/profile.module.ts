import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileAppointmentComponent, ProfileHistoryComponent, ProfileInfoComponent } from './components';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'info',
        component: ProfileInfoComponent,
      },
      {
        path: 'history',
        component: ProfileHistoryComponent,
      },
      {
        path: 'appointment',
        component: ProfileAppointmentComponent,
      },
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileInfoComponent,
    ProfileHistoryComponent,
    ProfileAppointmentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
    ProgressSpinnerModule,
    TabMenuModule,
    ButtonModule
  ]
})
export class ProfileModule { }
