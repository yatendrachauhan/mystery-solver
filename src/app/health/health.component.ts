import { AfterViewInit, Component, ElementRef } from '@angular/core';

declare var loadDeathCalculator: any;

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    loadDeathCalculator();
  }

  openLink() {
    window.open('https://pubmed.ncbi.nlm.nih.gov/16717171/')
  }
}
