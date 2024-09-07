import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor, ErrorInterceptor } from './core';

@NgModule({
	declarations: [
		AppComponent,	
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		SharedModule,
		HttpClientModule
	],
	providers: [
		// { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
