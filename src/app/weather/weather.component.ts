import { Component, OnInit } from '@angular/core';
import {WeatherApiService} from '../service/weather-api.service';
import { IWeatherApiResponse } from '../Interface/iweather-api-response';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  datosClima: IWeatherApiResponse;
  ciudad:string;
  pais:string;
  temperatura:number;
  velocidadViento : number;
  humedad:number;
  climaActual:string;

  constructor(
    private _weatherApiService: WeatherApiService
  ) {
      
   }

  ngOnInit(): void {
    this.cargarClima();
  }

  async cargarClima(){
    this.datosClima = await this._weatherApiService.getWeather().toPromise();
    this.temperatura = this.datosClima.list[0].main.temp;
    this.ciudad = this.datosClima.city.name;
    this.pais = this.datosClima.city.country;
    this.velocidadViento = this.mpsAmph(this.datosClima.list[0].wind.speed);
    this.humedad = this.datosClima.list[0].main.humidity;
    this.climaActual = this.datosClima.list[0].weather[0].main;

  }

  //conversion de velocidad metros/segundos a Millas/hora
  mpsAmph(velocidad:number){
    return velocidad*3600/1609.34;
  }

}
