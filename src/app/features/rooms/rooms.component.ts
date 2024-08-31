import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'

@Component({
	selector: 'app-rooms',
	templateUrl: './rooms.component.html',
	styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {
	ngOnInit(): void {
		AOS.init()
	}
}
