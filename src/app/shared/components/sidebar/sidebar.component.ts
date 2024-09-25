import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../auth/auth.service';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
	sidebar: boolean = false;
	constructor(private authService: AuthService) {

	}
	items: MenuItem[] = [
		{ label: 'Bosh Sahifa', icon: 'pi pi-home', routerLink: '/' },
		{ label: 'Biz Haqimizda', icon: 'pi pi-info-circle', routerLink: '/about' },
		{ label: 'Shifokorlar', icon: 'pi pi-user-md', routerLink: '/doctors' },
		{ label: 'Xizmatlar', icon: 'pi pi-briefcase', routerLink: '/service' },
		{ label: 'Palatalar', icon: 'pi pi-building', routerLink: '/rooms' },
		{ label: 'Yangiliklar', icon: 'pi pi-newspaper', routerLink: '/news' },
		{ label: 'Bog’lanish', icon: 'pi pi-phone', routerLink: '/contact' }
	];

	close() {
		this.sidebar = false
	}
	isRegister() {
		return this.authService.isAuthenticated()
	}
}
