import { Injectable } from '@angular/core';
import {WEATHERS} from "./weather.data";
import {Observable} from "rxjs/Rx";
import {Http} from "@angular/http";
import {WeatherItem} from "./weather-item.interface";


@Injectable()
export class WeatherService {

    constructor(private _http:Http) { }
    getData(){
        return WEATHERS;
    };
    addData(weatherItem:WeatherItem){
        WEATHERS.push(weatherItem);
    };
    searchData(cityName:string):Observable<any>{
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&APPID=bca3a322e7cbdd4b2944a09793a23fa6&units=metric')
            .map(response => response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json());
            });
    }

}