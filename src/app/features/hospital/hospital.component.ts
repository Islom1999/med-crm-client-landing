import { Component } from '@angular/core';
import * as AOS from 'aos';
import { DoctorsService, ServiceService, FilesService, NewsService } from '../../shared/services';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { INews, IServices, IStaff } from '../../../interfaces';

@Component({
	selector: 'app-hospital',
	templateUrl: './hospital.component.html',
	styleUrl: './hospital.component.scss'
})
export class HospitalComponent {
	openIndex: number | null = null;
	$service!: Observable<IServices[]>
	$doctors!: Observable<IStaff[]>
	$news!: Observable<INews[]>

	$params: HttpParams = new HttpParams();

	constructor(
		private _doctorService: DoctorsService,
		private _serviseService: ServiceService,
		private _newsService: NewsService,
		private _filesService: FilesService,
	) { }


	ngOnInit() {
		AOS.init();

		this.$params = new HttpParams().set('type', 'doctor');
		this._serviseService.updateParams(this.$params);

		this.$service = this._serviseService.getAll()
		this.$doctors = this._doctorService.getAll()
		this.$news = this._newsService.getAll()
	}

	accordionToggle(index: number) {
		if (this.openIndex === index) {
			this.openIndex = null;
		} else {
			this.openIndex = index;
		}
	}

	getView(image: string) {
		return this._filesService.getView(image)
	}
}
