import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-death',
  templateUrl: './death.component.html',
  styleUrls: ['./death.component.scss']
})
export class DeathComponent {
  // cities = [
  //   { name: 'Celsius C', code: 'C' },
  //   { name: 'Fahrenheit', code: 'F' },
  //   { name: 'Kelvin', code: 'K' }
  // ];

  constructor(private router: Router) {}

  loadQuestions(pathString: string) {
    this.router.navigateByUrl(pathString)
  }
}
