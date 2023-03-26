import { AfterViewInit, Component, ElementRef } from '@angular/core';

declare var loadDeathCalculator: any;

@Component({
  selector: 'app-stress-calculator',
  templateUrl: './stress-calculator.component.html',
  styleUrls: ['./stress-calculator.component.scss']
})
export class StressCalculatorComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    loadDeathCalculator();
  }

  openLink() {
    window.open('https://pubmed.ncbi.nlm.nih.gov/15820844/#:~:text=The%20PHQ-2%20performed%20favorably%20with%20respect%20to%20a,grading%20its%20severity%2C%20and%20monitoring%20outcomes%20over%20time.')
  }
}
