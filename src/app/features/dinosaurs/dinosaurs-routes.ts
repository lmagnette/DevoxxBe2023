import { Routes } from '@angular/router';
import { DinoListComponent } from './components/dino-list/dino-list.component';
import { DinoDetailsComponent } from './components/dino-details/dino-details.component';
import { BetterDinoDetailsComponent } from './components/better-dino-details/better-dino-details.component';


export const DINOSAURS_ROUTES: Routes = [
  { path: '', component: DinoListComponent },
  { path: ':id',
    component: DinoDetailsComponent,
  },
  { path: ':id',
    component: BetterDinoDetailsComponent,
  },
];
