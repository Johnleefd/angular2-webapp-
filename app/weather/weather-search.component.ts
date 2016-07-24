import { Component, OnInit } from '@angular/core';
import {WeatherService} from "./weather.service";
import {ControlGroup} from "@angular/common";
import {WeatherItem} from "./weather-item.interface";

@Component({

    selector: 'weather-search',
    template:`
        <form (ngSubmit)="onSubmit(f)" #f="ngForm"> 
                <label>City： </label>
                <input type="text"
                ngControl="cityName" required/> 
                <button type="submit" class="searchbutton">Add City</button>
        </form>
        <div class="result">City found:  {{data.name}}<br></div>
`,

})
export class WeatherSearchComponent implements OnInit {
    constructor(private _weatherService:WeatherService) { }
    data:any={}
    ngOnInit() { }
    onSubmit(form:ControlGroup){
        this._weatherService.searchData(form.value.cityName)
            .subscribe(
                data => {
                    const weatherItem = new WeatherItem(data.name,data.weather[0].description,data.main.temp);
                    this._weatherService.addData(weatherItem);
                    this.data = data;
                }
            )
    }

}