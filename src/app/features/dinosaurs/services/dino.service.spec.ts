import { TestBed } from '@angular/core/testing';

import { DinoService } from './dino.service';

describe('DinoService', () => {
  let service: DinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
