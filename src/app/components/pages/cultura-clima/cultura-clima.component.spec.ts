import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaClimaComponent } from './cultura-clima.component';

describe('CulturaClimaComponent', () => {
  let component: CulturaClimaComponent;
  let fixture: ComponentFixture<CulturaClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturaClimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
