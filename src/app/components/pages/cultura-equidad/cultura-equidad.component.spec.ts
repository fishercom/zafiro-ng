import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaEquidadComponent } from './cultura-equidad.component';

describe('CulturaEquidadComponent', () => {
  let component: CulturaEquidadComponent;
  let fixture: ComponentFixture<CulturaEquidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturaEquidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaEquidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
