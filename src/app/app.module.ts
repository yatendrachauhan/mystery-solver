import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {MessageModule} from 'primeng/message';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { DeathComponent } from './death/death.component';
import { HappinessComponent } from './happiness/happiness.component';
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { DeathCalculatorComponent } from './death-calculator/death-calculator.component';
import { HappinessCalculatorComponent } from './happiness-calculator/happiness-calculator.component';
import { StressCalculatorComponent } from './stress-calculator/stress-calculator.component';
import { ForensicCalculatorComponent } from './forensic-calculator/forensic-calculator.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DeathComponent,
    HappinessComponent,
    HealthComponent,
    HomeComponent,
    QuestionnaireComponent,
    DeathCalculatorComponent,
    HappinessCalculatorComponent,
    StressCalculatorComponent,
    ForensicCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
