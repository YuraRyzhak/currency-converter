import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RateType } from 'src/app/models/rate-type.models';
import { ExchangeRateService } from 'src/app/services/exchange-rate.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ExchangeRateService],
})

export class HeaderComponent implements OnInit {
  rates$: Observable<RateType[]>;

  constructor(private exchangeRateService: ExchangeRateService) {
    this.rates$ = exchangeRateService.getCurrentRate$();
  }

  ngOnInit(): void {}

}
