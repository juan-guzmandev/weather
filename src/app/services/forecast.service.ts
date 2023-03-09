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

    this.weather$ = this.weatherSubject.asObservable().pipe(map(this.structureData));
    this.getweather({
      lat: -16.489689,
      lon: -68.119293
    })
  }
  structureData(data: any){

    let minMaxPerDay = {
    }

    data.list.forEach(weatherObject => {
      let date = new Date(weatherObject.dt*1000);
      let hours = date.getHours();
      let month = date.getMonth();
      let day = date.getDate();
      let key = `${month}-${day}`;

      let tempPerDay : Weather = minMaxPerDay[key] ||{
        minMaxTemp: {}
      };

      if(!tempPerDay.cod || hours == 16){
        let source = weatherObject.weather[0];
        tempPerDay = { ...tempPerDay, ...source}
        tempPerDay.cod = source.id;
        tempPerDay.name = data.city.name;
      }

      if(!tempPerDay.minMaxTemp.min || weatherObject.main.temp_min < tempPerDay.minMaxTemp.min  ){
        tempPerDay.minMaxTemp.min = weatherObject.main.temp_min;
      }

      if(!tempPerDay.minMaxTemp.max || weatherObject.main.temp_max > tempPerDay.minMaxTemp.max ){
        tempPerDay.minMaxTemp.max = weatherObject.main.temp_max;
      }

      minMaxPerDay[key] = tempPerDay;
      
    });
    return Object.values(minMaxPerDay); // convertir un objeto en arreglo
  }

  getweather( coords: Coords) {
    //  return this.http.get('assets/weather.json').subscribe( data =>{
    //     console.log(data);
    //   })
      let args: string = `?lat=${coords.lat}&lon=${coords.lon}&appid=${environment.key}&units=metric`;
      let url = this.endpoint + args;
      if(isDevMode()){
         url ='assets/forecast.json';
       }
      this.http.get(url).subscribe(this.weatherSubject);
      // setTimeout( ()=> {
      //   this.weatherSubject.next({});
      // })
    }
}
