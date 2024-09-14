import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../../../shared/services';
import { IAppointment } from '../../../../../interfaces';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-profile-appointment',
	templateUrl: './profile-appointment.component.html',
	styleUrl: './profile-appointment.component.scss'
})
export class ProfileAppointmentComponent implements OnInit {
	$appointment!: Observable<IAppointment[]>

	constructor(
		private appointmentService: AppointmentService
	) { }
	ngOnInit() {
		this.$appointment = this.appointmentService.getAll()
	}
}
