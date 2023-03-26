import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck } from '@angular/core';

declare var loadDeathCalculator: any;

@Component({
  selector: 'app-death-calculator',
  templateUrl: './death-calculator.component.html',
  styleUrls: ['./death-calculator.component.scss']
})
export class DeathCalculatorComponent implements AfterViewInit {

  ngAfterViewInit() {
    loadDeathCalculator();
    // if(window.localStorage.getItem('loaded') !== 'true')
    // setTimeout(() => {
    //   var s = document.createElement("script");
    //   s.type = "text/javascript";
    //   s.async = true;
    //   s.src = "https://cdn.omnicalculator.com/sdk.js";
    //   this.elementRef.nativeElement.appendChild(s);
    //   window.localStorage.setItem('loaded', 'true');
    // }, 0);
      
  }

  openLink() {
    window.open('https://pubmed.ncbi.nlm.nih.gov/27259559/')
  }

}
