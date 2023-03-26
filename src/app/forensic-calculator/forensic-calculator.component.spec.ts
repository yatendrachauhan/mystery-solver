import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForensicCalculatorComponent } from './forensic-calculator.component';

describe('ForensicCalculatorComponent', () => {
  let component: ForensicCalculatorComponent;
  let fixture: ComponentFixture<ForensicCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForensicCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForensicCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
