import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forensic-calculator',
  templateUrl: './forensic-calculator.component.html',
  styleUrls: ['./forensic-calculator.component.scss']
})
export class ForensicCalculatorComponent implements OnInit {
  deathForm: FormGroup;
  constructor(private httpClient: HttpClient, private fb: FormBuilder) {
    this.deathForm = this.fb.group({
      Cysteine: ['', [Validators.required]],
      PROTEIN: ['', [Validators.required]],
      Tryptophan: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

    // 
  }

  deathFormSubmit() {
    console.log(this.deathForm);
    if (!this.deathForm.valid) {
      return;
    }

    const formValues = this.deathForm.value;
    const requestParams = {
      "fields": Object.keys(formValues),
      "rows": [
        Object.values(formValues)
      ]
    };


    console.log(requestParams);

    // this.httpClient.post('https://model.h2o.web.att.com/9be23d79-5cf7-4ae8-b98c-e66d831c3961/model/score', requestParams).subscribe(result => {
    //   console.log(result);
    // });
  }
}
