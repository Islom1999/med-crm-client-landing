import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';



@NgModule({
	declarations: [
		NavbarComponent,
		FooterComponent,
		SidebarComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		ButtonModule,
		SidebarModule
	],
	exports: [
		NavbarComponent,
		FooterComponent,
		SidebarComponent,
		SidebarModule,  
		RouterModule,
	]
})
export class SharedModule { }

