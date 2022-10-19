import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { RateType } from 'src/app/models/rate-type.models';
import { ExchangeRateService } from 'src/app/services/exchange-rate.services';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
  providers: [ExchangeRateService],
})

export class CurrencyConverterComponent implements OnInit {
  rates$: Observable<RateType[]>;
  selectedOption1!: number;
  selectedOption2!: number;
  valueFrom!: number;
  valueTo!: number;
  form!: FormGroup;

  constructor(
    private exchangeRateService: ExchangeRateService,
    private formBuilder: FormBuilder
  ) {
    this.rates$ = exchangeRateService.getCurrentRate$();
  }

  convertFrom() {
    this.valueTo =
      (this.selectedOption1 * this.valueFrom) / this.selectedOption2;
  }

  convertTo() {
    this.valueFrom =
      (this.selectedOption2 * this.valueTo) / this.selectedOption1;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      currencyFrom: [''],
      currencyTo: [''],
      valueFrom: [''],
      valueTo: [''],
    });
  }
}
