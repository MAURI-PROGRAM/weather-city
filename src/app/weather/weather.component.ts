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
  lluvia:number;

  constructor(
    private _weatherApiService: WeatherApiService
  ) {
      
   }

  ngOnInit(): void {
    this.cargarClima();
  }

  async cargarClima(){
    try{
      this.datosClima = await this._weatherApiService.getWeather().toPromise();
      this.temperatura = this.datosClima.list[0].main.temp || 0;
      this.ciudad = this.datosClima.city.name || "";
      this.pais = this.datosClima.city.country|| "";
      this.velocidadViento = this.mpsAmph(this.datosClima.list[0].wind.speed)|| 0;
      this.humedad = this.datosClima.list[0].main.humidity|| 0;
      this.lluvia = this.datosClima.list[0].rain?.["3h"] || 0;
    }catch{
      alert("Ocurrio algun tipo de problema")
    }
    

  }

  //conversion de velocidad metros/segundos a Millas/hora
  mpsAmph(velocidad:number){
    return velocidad*3600/1609.34;
  }

}
