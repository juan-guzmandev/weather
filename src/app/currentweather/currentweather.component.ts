import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService} from '../services/current-weather.service'
@Component({
  selector: 'app-currentweather',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.scss']
})
export class CurrentweatherComponent implements OnInit {

  constructor(public weathersvc : CurrentWeatherService) { }

  ngOnInit(): void {
    // this.weathersvc.weather$.subscribe(console.log);
  }

}
