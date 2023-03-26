import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressCalculatorComponent } from './stress-calculator.component';

describe('StressCalculatorComponent', () => {
  let component: StressCalculatorComponent;
  let fixture: ComponentFixture<StressCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StressCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StressCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
