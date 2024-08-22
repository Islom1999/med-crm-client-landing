import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
	selector: 'app-about-slider',
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: './about-slider.html',
	styleUrl: './about-slider.scss',
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutSlider {
	
}
