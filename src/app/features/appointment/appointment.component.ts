import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as AOS from 'aos';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss',
  providers: []
})
export class AppointmentComponent {

  $appointment: FormGroup = new FormGroup({})

  ngOnInit(): void {
    AOS.init()
  }

}
