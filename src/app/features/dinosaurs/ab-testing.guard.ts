import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { DinoService } from './services/dino.service';

export const abTestingGuard: CanActivateFn = (route, state) => {
  return inject(DinoService).useNewUi;
};
