import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeathCalculatorComponent } from './death-calculator/death-calculator.component';
import { DeathComponent } from './death/death.component';
import { ForensicCalculatorComponent } from './forensic-calculator/forensic-calculator.component';
import { HappinessCalculatorComponent } from './happiness-calculator/happiness-calculator.component';
import { HappinessComponent } from './happiness/happiness.component';
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { StressCalculatorComponent } from './stress-calculator/stress-calculator.component';

const routes: Routes = [
  {
    path: 'death',
    component: DeathComponent
  },
  {
    path: 'death-calculator',
    component: DeathCalculatorComponent
  },
  {
    path: 'forensic-calculator',
    component: ForensicCalculatorComponent
  },
  {
    path: 'happiness',
    component: HappinessComponent
  },
  {
    path: 'happiness-calculator',
    component: HappinessCalculatorComponent
  },
  {
    path: 'stress-calculator',
    component: StressCalculatorComponent
  },
  {
    path: 'health',
    component: HealthComponent
  },
  {
    path: 'questionnaire',
    component: QuestionnaireComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
