import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../../../shared/services';
import { IAppointment, IAppointService, ITransactions } from '../../../../../interfaces';
import { Observable } from 'rxjs';
import { TransactionStatus } from '../../../../../enumerations';

@Component({
	selector: 'app-profile-appointment',
	templateUrl: './profile-appointment.component.html',
	styleUrl: './profile-appointment.component.scss'
})
export class ProfileAppointmentComponent implements OnInit {
	$appointment!: Observable<IAppointment[]>
	$appointment_service!: Observable<IAppointService[]>

	constructor(
		private appointmentService: AppointmentService
	) { }
	ngOnInit() {
		this.$appointment = this.appointmentService.getAll()
		this.$appointment_service = this.appointmentService.getAllServices()
	}

	paymentPrice(transaction: ITransactions[]): number {
		return transaction.reduce((pay, item) => {
			if(item.state === 1 && item.status === TransactionStatus.PAID) {
				return pay + item.price;
			}
			return pay;
		}, 0);
	}
	
}
