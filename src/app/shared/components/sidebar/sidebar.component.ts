import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss',
	standalone: true,
	imports: [SidebarModule, ButtonModule]
})
export class SidebarComponent {
	sidebar: boolean = false;
}
