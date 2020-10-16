import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualidadTutorialesComponent } from './actualidad-tutoriales.component';

describe('ActualidadTutorialesComponent', () => {
  let component: ActualidadTutorialesComponent;
  let fixture: ComponentFixture<ActualidadTutorialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualidadTutorialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualidadTutorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
