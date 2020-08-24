import { Component, OnInit } from '@angular/core';
import {WeatherApiService} from '../service/weather-api.service';
import { IWeatherApiResponse } from '../Interface/iweather-api-response';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(
    private _weatherApiService: WeatherApiService
  ) {
      _weatherApiService.getWeather().subscribe((res:IWeatherApiResponse) => {
        console.log(res)
      });
   }

  ngOnInit(): void {
  }

}
