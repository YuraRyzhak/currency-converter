import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, take } from 'rxjs';
import { APIRateType } from '../models/api-rate-type.models';
import { RateType } from '../models/rate-type.models';

@Injectable()
export class ExchangeRateService {
  static getCurrentRate$(): number {
    throw new Error('Method not implemented.');
  }
  constructor(private httpClient: HttpClient) {}

  getCurrentRate$(): Observable<RateType[]> {
    return this.httpClient
      .get<APIRateType>(
        'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
      )
      .pipe(
        map((arrayRateFromAPI) =>
          arrayRateFromAPI.map(
            (rateFromAPI: {
              r030: number,
              txt: string,
              rate: number
              cc: string,
            }) => ({
              r030: rateFromAPI.r030,
              txt: rateFromAPI.txt,
              rate: Number(rateFromAPI.rate).toFixed(2),
              cc: rateFromAPI.cc,
            })
          )
        ),
        take(1)
      );
  }

}
