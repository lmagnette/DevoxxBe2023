import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dinosaures', loadChildren: () => import('./features/dinosaurs/dinosaurs-routes').then(m => m.DINOSAURS_ROUTES) },
  { path: '', redirectTo: 'dinosaures', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
