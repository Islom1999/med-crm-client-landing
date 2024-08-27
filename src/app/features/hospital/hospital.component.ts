import { Component } from '@angular/core';

@Component({
	selector: 'app-hospital',
	templateUrl: './hospital.component.html',
	styleUrl: './hospital.component.scss'
})
export class HospitalComponent {
	openIndex: number | null = null;

	accordionToggle(index: number) {
		if (this.openIndex === index) {
			this.openIndex = null;
		} else {
			this.openIndex = index;
		}
	}

}
