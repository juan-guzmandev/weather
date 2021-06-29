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
export class ForecastService {

  public weatherSubject: Subject<any> = new Subject<any>();
  public weather$ : Observable<any> = this.weatherSubject.asObservable();

  endpoint: string = 'https://api.openweathermap.org/data/2.5/forecast';
  constructor(private http: HttpClient) {

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
      // if(isDevMode()){
      //   url ='assets/weather.json';
      // }
      this.http.get(url).subscribe(this.weatherSubject);
      // setTimeout( ()=> {
      //   this.weatherSubject.next({});
      // })
    }
}
