import { AfterViewInit, Component, ElementRef } from '@angular/core';

declare var loadDeathCalculator: any;

@Component({
  selector: 'app-happiness-calculator',
  templateUrl: './happiness-calculator.component.html',
  styleUrls: ['./happiness-calculator.component.scss']
})
export class HappinessCalculatorComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    loadDeathCalculator();
  }

  openLink() {
    window.open('https://sonjalyubomirsky.com/wp-content/themes/sonjalyubomirsky/papers/LL1999.pdf')
  }
}
