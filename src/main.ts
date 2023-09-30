
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: 'dinosaures', loadChildren: () => import('./app/features/dinosaurs/dinosaurs-routes').then(m => m.DINOSAURS_ROUTES) },
  { path: '', redirectTo: 'dinosaures', pathMatch: 'full'},
];

bootstrapApplication(AppComponent,{
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideNoopAnimations()
    ]
}).catch(err => console.error(err));
