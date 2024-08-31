import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
	ngOnInit() {
		AOS.init();
	}
}
