import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	standalone: true,
	selector: 'app-comments-slider',
	templateUrl: './comments-slider.component.html',
	styleUrl: './comments-slider.component.scss',
	imports: [CommonModule, RouterModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommentsSliderComponent {
	@Input()
	$client_comments!:{image:string, star:number, name:string, comment:string}[]

	arrayMake(count:number){
		return Array(count).fill(0)
	}

	breakpointsConfig = {
		768: {  // 768px va undan katta ekranlar uchun
		  slidesPerView: 2,
		},
		1400: { // 1024px va undan katta ekranlar uchun (katta ekranda kerak bo'lsa, o'zgartiring)
		  slidesPerView: 2,
		},
	  };
}
