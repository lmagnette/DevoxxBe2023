import { ActivatedRoute, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { DinoListComponent } from './components/dino-list/dino-list.component';
import { DinoDetailsComponent } from './components/dino-details/dino-details.component';
import { BetterDinoDetailsComponent } from './components/better-dino-details/better-dino-details.component';
import { abTestingGuard } from './ab-testing.guard';
import { inject } from '@angular/core';
import { DinoService } from './services/dino.service';

export const routeParam = (key:string, route = inject(ActivatedRoute).snapshot) => {
  return Number.parseInt(route.paramMap.get(key) || '1');
}


export const DINOSAURS_ROUTES: Routes = [
  { path: '', component: DinoListComponent },
  { path: ':id',
    component: DinoDetailsComponent,
    canMatch: [abTestingGuard]
  },
  { path: ':id',
    component: BetterDinoDetailsComponent,
    resolve:{
      dino : (route:ActivatedRouteSnapshot) => {
        return inject(DinoService).get(routeParam('id', route));
      }
    }

  },
];
