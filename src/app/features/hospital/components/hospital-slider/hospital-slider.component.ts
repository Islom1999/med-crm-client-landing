import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as AOS from 'aos';
import { Observable } from 'rxjs';
import { IStaff } from '../../../../../interfaces';
import { DoctorsService, FilesService } from '../../../../shared/services';

@Component({
	standalone: true,
	selector: 'app-hospital-slider',
	templateUrl: './hospital-slider.component.html',
	styleUrl: './hospital-slider.component.scss',
	imports: [CommonModule, RouterModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HospitalSliderComponent {
	@Input()
	$doctors!: Observable<IStaff[]>
	
	constructor(
		private _filesService: FilesService,
	){}

	ngOnInit() {
		AOS.init();
	}

	getView(image: string) {
		return this._filesService.getView(image)
	}
}
