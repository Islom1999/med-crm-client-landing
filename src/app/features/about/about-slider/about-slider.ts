import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwiperOptions } from 'swiper/types';

@Component({
	selector: 'app-about-slider',
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: './about-slider.html',
	styleUrl: './about-slider.scss',
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutSlider {

	config: SwiperOptions = {
		slidesPerView: 3, // Show 3 items
		centeredSlides: true, // Center the active slide
		spaceBetween: -100, // Adjust this value to control how much of the items should be off-screen
		loop: true, // Loop through slides
		navigation: true, // Navigation arrows
		breakpoints: {
			640: {
				slidesPerView: 3, // Adjust for smaller screens
			},
			768: {
				slidesPerView: 3, // Adjust for medium screens
			},
			1024: {
				slidesPerView: 3, // Default setting for larger screens
			},
		}
	};

}
