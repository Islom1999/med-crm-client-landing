import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	standalone: true,
	selector: 'app-hospital-slider',
	templateUrl: './hospital-slider.component.html',
	styleUrl: './hospital-slider.component.scss',
	imports: [CommonModule, RouterModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HospitalSliderComponent {

}
