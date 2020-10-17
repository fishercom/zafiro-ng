import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualidadComentariosComponent } from './actualidad-comentarios.component';

describe('ActualidadComentariosComponent', () => {
  let component: ActualidadComentariosComponent;
  let fixture: ComponentFixture<ActualidadComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualidadComentariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualidadComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
