import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaProtagonistasComponent } from './cultura-protagonistas.component';

describe('CulturaProtagonistasComponent', () => {
  let component: CulturaProtagonistasComponent;
  let fixture: ComponentFixture<CulturaProtagonistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturaProtagonistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaProtagonistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
