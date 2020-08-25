import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IWeatherApiResponse } from '../Interface/iweather-api-response';
import { UnidadesCLima } from '../Enumerable/enumerableUnit';

const {idCityDefault,urlapiweather,appidWeather} = environment;

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  
  constructor(private http: HttpClient) { }  

  getWeather(idcity : string = idCityDefault,cnt:number = 1,unidades:UnidadesCLima=UnidadesCLima.metric){
    let endPoint = `${urlapiweather}?id=${idcity}&APPID=${appidWeather}&cnt=${cnt}&units=${UnidadesCLima[unidades]}` ;
    return this.http.get<IWeatherApiResponse>(endPoint);
  }
}
