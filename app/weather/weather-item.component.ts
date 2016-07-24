         import { Component, OnInit } from '@angular/core';
         import {WeatherService} from "./weather.service";
         import {WeatherItem} from "./weather-item.interface";

         @Component({

             selector: 'weather-item',
             template:`
                <div class="card">
                <div class="cityinfo">
                    <h3>{{weatherItem.cityName}}</h3>
                    <p>{{weatherItem.description}}</p>
                </div>
                <div class="temperature">
                    <p> {{weatherItem.temperature}}℃</p>               
                </div>
                </div>`,
             inputs:['weatherItem:Item']

         })
         export class WeatherItemComponent implements OnInit {
             constructor() { }
             public weatherItem:WeatherItem
             ngOnInit() {

             }

         }