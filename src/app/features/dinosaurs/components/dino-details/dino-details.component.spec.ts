import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoDetailsComponent } from './dino-details.component';

describe('DinoDetailsComponent', () => {
  let component: DinoDetailsComponent;
  let fixture: ComponentFixture<DinoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DinoDetailsComponent]
    });
    fixture = TestBed.createComponent(DinoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
