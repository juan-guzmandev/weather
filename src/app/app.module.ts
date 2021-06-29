import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrentweatherComponent } from './currentweather/currentweather.component';
import { WeatherIconsComponent } from './weather-icons/weather-icons.component';
import { ForecastComponent } from './forecast/forecast.component'


@NgModule({
  declarations: [
    AppComponent,
    CurrentweatherComponent,
    WeatherIconsComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
