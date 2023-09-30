import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './features/navigation/navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule( {
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
