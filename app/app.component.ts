import {Component, OnInit} from '@angular/core';
import {WeatherListComponent} from "./weather/weather-list.component";
import {WeatherService} from "./weather/weather.service";
import {WeatherItem} from "./weather/weather-item.interface";
import {WeatherSearchComponent} from "./weather/weather-search.component";





@Component({
    selector: 'my-app',
    template: `
    <nav>
    <h1 class="title">Weather Report</h1>
    </nav>
    <weather-search></weather-search>
    <weather-list></weather-list>
 
    `,
    directives:[WeatherListComponent,WeatherSearchComponent]

})
export class AppComponent{

}


