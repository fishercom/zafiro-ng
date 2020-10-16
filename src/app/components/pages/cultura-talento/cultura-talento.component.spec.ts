import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaTalentoComponent } from './cultura-talento.component';

describe('CulturaTalentoComponent', () => {
  let component: CulturaTalentoComponent;
  let fixture: ComponentFixture<CulturaTalentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturaTalentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaTalentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
