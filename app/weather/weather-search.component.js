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
var weather_service_1 = require("./weather.service");
var weather_item_interface_1 = require("./weather-item.interface");
var WeatherSearchComponent = (function () {
    function WeatherSearchComponent(_weatherService) {
        this._weatherService = _weatherService;
        this.data = {};
    }
    WeatherSearchComponent.prototype.ngOnInit = function () { };
    WeatherSearchComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this._weatherService.searchData(form.value.cityName)
            .subscribe(function (data) {
            var weatherItem = new weather_item_interface_1.WeatherItem(data.name, data.weather[0].description, data.main.temp);
            _this._weatherService.addData(weatherItem);
            _this.data = data;
        });
    };
    WeatherSearchComponent = __decorate([
        core_1.Component({
            selector: 'weather-search',
            template: "\n        <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\"> \n                <label>City\uFF1A </label>\n                <input type=\"text\"\n                ngControl=\"cityName\" required/> \n                <button type=\"submit\" class=\"searchbutton\">Add City</button>\n        </form>\n        <div class=\"result\">City found:  {{data.name}}<br></div>\n",
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], WeatherSearchComponent);
    return WeatherSearchComponent;
}());
exports.WeatherSearchComponent = WeatherSearchComponent;
//# sourceMappingURL=weather-search.component.js.map