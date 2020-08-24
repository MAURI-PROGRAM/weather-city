import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IWeatherApiResponse } from '../Interface/iweather-api-response';

const {idCityDefault,urlapiweather,appidWeather} = environment;

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  
  constructor(private http: HttpClient) { }  

  getWeather(idcity : string = idCityDefault){
    let endPoint = `${urlapiweather}?id=${idcity}&APPID=${appidWeather}` ;
    console.log(endPoint)
    return this.http.get<IWeatherApiResponse>(endPoint);
  }
}
