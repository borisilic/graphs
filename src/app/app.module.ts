import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

import 'd3';
import 'nvd3';
import {NvD3Module} from 'ng2-nvd3';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent
  ],
  imports: [
    [BrowserModule, NvD3Module]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
