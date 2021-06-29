import { Component } from '@angular/core';
import { ForecastService } from './services/forecast.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'weather';

  constructor(private forecast: ForecastService){

    this.forecast.weather$.subscribe(console.log);
  }

}
