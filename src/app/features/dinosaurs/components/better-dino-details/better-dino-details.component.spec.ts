import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterDinoDetailsComponent } from './better-dino-details.component';

describe('BetterDinoDetailsComponent', () => {
  let component: BetterDinoDetailsComponent;
  let fixture: ComponentFixture<BetterDinoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BetterDinoDetailsComponent]
    });
    fixture = TestBed.createComponent(BetterDinoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
