import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer dapi356b023b754c57ec9dbcee96cb3a719f-2`,
      'Access-Control-Allow-Headers': '*'
    });

    const requestOptions = { headers: headers };

    this.httpClient.post(
      'https://adb-3175252654970232.12.azuredatabricks.net/model/Time-since-death-model/1/invocations?Token=Bearerdapi356b023b754c57ec9dbcee96cb3a719f-2',
      {
        "dataframe_records": [
          {
            "Cysteine": 5.1,
            "PROTEIN": 3.5,
            "Tryptophan": 1.4
          }
        ]
      },
      requestOptions
    ).subscribe(result => {
      console.log(result);
    });
  }
}
