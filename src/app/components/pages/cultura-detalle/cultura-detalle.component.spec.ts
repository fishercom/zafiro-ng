import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaDetalleComponent } from './cultura-detalle.component';

describe('CulturaDetalleComponent', () => {
  let component: CulturaDetalleComponent;
  let fixture: ComponentFixture<CulturaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturaDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
