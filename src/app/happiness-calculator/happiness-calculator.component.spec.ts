import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessCalculatorComponent } from './happiness-calculator.component';

describe('HappinessCalculatorComponent', () => {
  let component: HappinessCalculatorComponent;
  let fixture: ComponentFixture<HappinessCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappinessCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappinessCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
