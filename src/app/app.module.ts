import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CurrentweatherComponent } from './currentweather/currentweather.component';
import { WeatherIconsComponent } from './weather-icons/weather-icons.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { LoadingComponent } from './loading/loading.component'


@NgModule({
  declarations: [
    AppComponent,
    CurrentweatherComponent,
    WeatherIconsComponent,
    ForecastComponent,
    WeatherCardComponent,
    LoadingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
