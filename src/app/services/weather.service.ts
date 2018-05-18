import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class WeatherService {
    constructor(private _http: HttpClient) { }

    getWeather() : Observable<IWeatherResult>
    {
        return this._http.get<IWeatherResult>(`http://api.openweathermap.org/data/2.5/forecast/daily?q=Antwerpen&units=metric&cnt=4&appid=bd5e378503939ddaee76f12ad7a97608`)
    }

    getWeatherForDays(days:number) : Observable<IWeatherResult>
    {
        return this._http.get<IWeatherResult>(`http://api.openweathermap.org/data/2.5/forecast/daily?q=Antwerpen&units=metric&cnt=${days}&appid=bd5e378503939ddaee76f12ad7a97608`)
    }
}

export interface IWeatherResult {
    city: City;
    cod: string;
    message: number;
    cnt: number;
    list: List[];
  }
  
  interface List {
    dt: number;
    temp: Temp;
    pressure: number;
    humidity: number;
    weather: Weather[];
    speed: number;
    deg: number;
    clouds: number;
    rain: number;
  }
  
  interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  interface Temp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  }
  
  interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
  }
  
  interface Coord {
    lon: number;
    lat: number;
  }