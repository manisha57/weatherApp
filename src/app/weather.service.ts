import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 url = 'https://api.openweathermap.org/data/2.5/weather';
 apiKyey = '967915a51c4477fb22fcd919ea1af35e';
    
  constructor(private http :HttpClient) { }
   public weatherData(lat,lon){
     let params = new HttpParams()
     .set('lat',lat)
     .set('lon',lon)
     .set('units','imperial')
     .set('appid',this.apiKyey)
     return this.http.get(this.url,{params})
   }

     public weatherDataByCity(city: string){
     let params = new HttpParams()
     .set('q',city)
     .set('units','imperial')
     .set('appid',this.apiKyey)
     return this.http.get(this.url,{params})
   }

   public historyData(){
    return this.http.get("https://api.openweathermap.org/data/2.5/onecall?lat=18.52&lon=73.86&%20exclude={part}&appid=967915a51c4477fb22fcd919ea1af35e")
   }
}
