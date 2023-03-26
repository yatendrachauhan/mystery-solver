import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathCalculatorComponent } from './death-calculator.component';

describe('DeathCalculatorComponent', () => {
  let component: DeathCalculatorComponent;
  let fixture: ComponentFixture<DeathCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeathCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
