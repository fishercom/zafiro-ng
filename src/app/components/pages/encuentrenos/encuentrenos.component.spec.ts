import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuentrenosComponent } from './encuentrenos.component';

describe('EncuentrenosComponent', () => {
  let component: EncuentrenosComponent;
  let fixture: ComponentFixture<EncuentrenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuentrenosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuentrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
