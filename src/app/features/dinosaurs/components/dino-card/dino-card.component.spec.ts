import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoCardComponent } from './dino-card.component';

describe('DinoCardComponent', () => {
  let component: DinoCardComponent;
  let fixture: ComponentFixture<DinoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DinoCardComponent]
    });
    fixture = TestBed.createComponent(DinoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
