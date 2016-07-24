"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var weather_data_1 = require("./weather.data");
var Rx_1 = require("rxjs/Rx");
var http_1 = require("@angular/http");
var WeatherService = (function () {
    function WeatherService(_http) {
        this._http = _http;
    }
    WeatherService.prototype.getData = function () {
        return weather_data_1.WEATHERS;
    };
    ;
    WeatherService.prototype.addData = function (weatherItem) {
        weather_data_1.WEATHERS.push(weatherItem);
    };
    ;
    WeatherService.prototype.searchData = function (cityName) {
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=bca3a322e7cbdd4b2944a09793a23fa6&units=metric')
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            console.error(error);
            return Rx_1.Observable.throw(error.json());
        });
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map