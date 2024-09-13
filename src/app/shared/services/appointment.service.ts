import { Injectable } from '@angular/core';
import { BaseApiService } from '../../core';
import { IAppointment, IStaff } from '../../../interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends BaseApiService<IAppointment> {
  constructor(http: HttpClient){
    super(http, `${environment.apiUrl}/client/appointment`);
  }
}
