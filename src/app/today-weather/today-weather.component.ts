import { Component} from '@angular/core';
import { WeatherService } from '../weather.service';
import * as $ from "jquery";



@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.css']
})
export class TodayWeatherComponent {
    weatherData: any;
    temp: number;
    temp1: number;
    temp2: number;
    lat;
    lon;

  constructor(private _WeatherService : WeatherService) { }
  ngOnInit() {   
    this.getLocaton();

    $(document).ready(function() {
      $("#moreDetails").click(function() {
        $("#showMore").toggle();
      });
    });
}

getLocaton(){
  if("geolocation" in navigator){
    navigator.geolocation.watchPosition((success)=>{
      this.lat = success.coords.latitude;
      this.lon = success.coords.longitude;

      this._WeatherService.weatherData(this.lat,this.lon).subscribe(data=>{
        console.log(data);
        this.weatherData =data;  

          //current temp
          this.temp =  Math.round((this.weatherData.main.temp - 32)*.5556);
          //minimum temp
          this.temp1 =  Math.round((this.weatherData.main.temp_min - 32)*.5556);
          //maximum temp
          this.temp2 =  Math.round((this.weatherData.main.temp_max - 32)*.5556);
      })

    })
  }
}

getCity(city){
  this._WeatherService.weatherDataByCity(city).subscribe(data=>{
   console.log(data);
   this.weatherData =data;  
  })
}
}
