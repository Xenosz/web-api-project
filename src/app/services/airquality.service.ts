import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { interceptingHandler } from "@angular/common/http/src/module";

@Injectable()
export class AirQualityService{

    constructor(private _http: HttpClient) {}

    getAirQuality(): Observable<RootObject>{
        return this._http.get<RootObject>("https://api.breezometer.com/baqi/?lat=51.215&lon=4.414&key=ad4d9695920b49bc8873d314fe795777")
        //.do(data => { console.log(JSON.stringify(data)) }); //Test om te zien of de data wordt opgehaald
    }

    

}
export interface RootObject {
    datetime: string;
    country_name: string;
    breezometer_aqi: number;
    breezometer_color: string;
    breezometer_description: string;
    country_aqi: number;
    country_aqi_prefix: string;
    country_color: string;
    country_description: string;
    data_valid: boolean;
    key_valid: boolean;
    random_recommendations: Randomrecommendations;
    dominant_pollutant_canonical_name: string;
    dominant_pollutant_description: string;
    dominant_pollutant_text: Dominantpollutanttext;
  }
  
  export  interface Dominantpollutanttext {
    main: string;
    effects: string;
    causes: string;
  }
  
export interface Randomrecommendations {
    children: string;
    sport: string;
    health: string;
    inside: string;
    outside: string;
  }