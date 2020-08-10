import { Component } from '@angular/core';
// import { WeatherService } from './weather.service';
// import * as $ from "jquery";
// import { ChartDataSets, ChartOptions } from 'chart.js';
// import { Color, Label } from 'ng2-charts';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';
  // weatherData: any;
  // historyData: any=[];
  // temp: number;
  // degtemp: number;
  // unix: any;
  // date: Date;
  // temp1: number;
  // temp2: number;
  // unix1: any;
  // sunsetDate: Date;
  // sunriseDate: Date;
  // degtemp1: number;
  // degtemp2: number;
  // unix2: any=[];
  // temp3: any;
  // temp4: any;
  // degtemp4: number;
  // degtemp3: number;
  // dailyDate: any=[];

  // public lineChartData: ChartDataSets[] = [
  //   { data: [], label: 'Series A' },
  // ];
  // public lineChartData: ChartDataSets[];
  // public lineChartLabels: Label[] = [];
  
  // public lineChartOptions: (ChartOptions & {}) = {
  //   responsive: true,
    
  // };
  // public lineChartColors: Color[] = [
  //   {
  //     backgroundColor: 'rgba(103, 58, 183, .1)',
  //   borderColor: 'rgb(103, 58, 183)',
  //   pointBackgroundColor: 'rgb(103, 58, 183)',
  //   pointBorderColor: '#fff',
  //   pointHoverBackgroundColor: '#fff',
  //   pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
  //   },
  // ];
  // public lineChartLegend = true;
  // public lineChartType = 'line';
  // public lineChartPlugins = [];
  // datePipeString: any;
  
  constructor(){
   
  }
  ngOnInit() {   
  //     this._WeatherService.weatherData().subscribe(data=>{
  //           console.log(data);
  //           this.weatherData =data;  
  //            //current temp
  //           this.temp = this.weatherData.main.temp;
  //           this.degtemp = Math.round(this.temp -273.15);

  //           //minimum temp
  //           this.temp1 = this.weatherData.main.temp_min;
  //           this.degtemp1 = Math.round(this.temp1 -273.15);

  //           //maximum temp
  //           this.temp2 = this.weatherData.main.temp_max;
  //           this.degtemp2 = Math.round(this.temp2-273.15);

  //           // sunrise Date
  //           this.unix = this.weatherData.sys.sunrise;
  //           this.sunriseDate = new Date(this.unix * 1000);

  //           //sunset Date
  //           this.unix1 = this.weatherData.sys.sunset;
  //           this.sunsetDate = new Date(this.unix1 * 1000);

  //     })
  //     this._WeatherService.historyData().subscribe(data=>{
  //       console.log(data);
  //       this.historyData =data;  
  //       const array=[];

  //       for(let row of this.historyData.daily){
  //         const chanedt= new Date(row.dt * 1000);
  //         array.push({...row, dt:chanedt})
  //          let datePipeString = this.datePipe.transform(chanedt,'yyyy-MM-dd')
  //         console.log("rw,,,",row);
  //         this.lineChartLabels.push(datePipeString.toString());       
  //       }
  //       console.log("array", array);
  //       let copylineChartData=[], min=[];
  //       this.dailyDate=array;
  //       this.dailyDate.map(a => {
  //         copylineChartData.push(a.temp.max);
  //         min.push(a.temp.min)
  //       })
  //       this.lineChartData = [
  //         { data:copylineChartData, label: 'max' },
  //         { data:min, label: 'min' },
  //       ];
  //       console.log("lineChartData", this.lineChartData)
  // })
  //     $(document).ready(function() {
  //       $("#moreDetails").click(function() {
  //         $("#showMore").toggle();
  //       });
  //     });
  }
} 