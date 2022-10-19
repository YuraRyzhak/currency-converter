import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyConverterComponent } from './currency-converter.component';
import { CurrencyConverterRoutingModule } from './currency-converter-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../_shared/header/header.module';

@NgModule({
  declarations: [CurrencyConverterComponent],
  imports: [
    CommonModule,
    RouterModule,
    CurrencyConverterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
  ],
  exports: [CurrencyConverterComponent],
})
export class CurrencyConverterModule {}
