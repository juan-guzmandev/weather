import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { Coords } from '../structures/coords.structures'
import { Weather } from '../structures/weather.structure'
@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  public weatherSubject: Subject<any> = new Subject<any>();
  public weather$ : Observable<any> = this.weatherSubject.asObservable();

  endpoint: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {

    this.weather$ = this.weatherSubject.asObservable().pipe(map( (data:any) =>{

      let mainWeather = data.weather[0]
      let weather: Weather = {
          name: data.name,
          cod: data.cod,
          temp: data.main.temp,
          ...mainWeather
      }
      return weather;
    }));

      this.getweather({
        lat: -16.489689,
        lon: -68.119293
      })
  }

  getweather( coords: Coords) {
  //  return this.http.get('assets/weather.json').subscribe( data =>{
  //     console.log(data);
  //   })
    let args: string = `?lat=${coords.lat}&lon=${coords.lon}&appid=${environment.key}&units=metric`;
    let url = this.endpoint + args;
    if(isDevMode()){
      url ='assets/weather.json';
    }
    this.http.get(url).subscribe(this.weatherSubject);
    // setTimeout( ()=> {
    //   this.weatherSubject.next({});
    // })
  }
  // Subject

  // Observable Observer.next()
}
