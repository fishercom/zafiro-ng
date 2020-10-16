import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualidadComentatiosComponent } from './actualidad-comentatios.component';

describe('ActualidadComentatiosComponent', () => {
  let component: ActualidadComentatiosComponent;
  let fixture: ComponentFixture<ActualidadComentatiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualidadComentatiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualidadComentatiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
