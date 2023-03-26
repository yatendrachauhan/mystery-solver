import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-happiness',
  templateUrl: './happiness.component.html',
  styleUrls: ['./happiness.component.scss']
})
export class HappinessComponent {

  constructor(private router: Router) {}

  loadCalculator(pathString: string) {
    this.router.navigateByUrl(pathString);
  }
}
