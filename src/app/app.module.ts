import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {CustomDatePipe} from './custom.datepipe';
import { DatePipe } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { CharjsComponent } from './charjs/charjs.component';
import { TodayWeatherComponent } from './today-weather/today-weather.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent, 
    CustomDatePipe,
    CharjsComponent,
    TodayWeatherComponent, 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    Ng2SearchPipeModule,
    FormsModule,
    OrderModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
