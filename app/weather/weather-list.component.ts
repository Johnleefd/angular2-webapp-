  import { Component, OnInit } from '@angular/core';
  import {WeatherItemComponent} from "./weather-item.component";
  import {WeatherItem} from "./weather-item.interface";
  import {WeatherService} from "./weather.service";

  @Component({

      selector: 'weather-list',
      template:`
        <weather-item
        *ngFor="#weatherItem of weatherItems"
        [Item]="weatherItem"></weather-item>
`,
      directives:[WeatherItemComponent],

  })
  export class WeatherListComponent implements OnInit {
      constructor(private _weatherService:WeatherService) { }
        weatherItems:WeatherItem[];
      ngOnInit() {
          this.weatherItems = this._weatherService.getData();
      }

  }