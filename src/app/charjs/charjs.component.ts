import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import { WeatherService } from '../weather.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-charjs',
  templateUrl: './charjs.component.html',
  styleUrls: ['./charjs.component.css']
})
export class CharjsComponent implements OnInit {
  historyData: any=[];
  date: Date;
  dailyDate: any=[];
  searchText: any;
  reverse: boolean = false;
  order: string  = 'dt';
  datePipeString: any;
  sortedCollection: any=[];

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Series A' },
  ];
  // public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[] = [];
  
  public lineChartOptions: (ChartOptions & {}) = {
    responsive: true,
    
  };
  public lineChartColors: Color[] = [
    {
    backgroundColor: 'rgba(103, 58, 183, .1)',
    borderColor: 'rgb(103, 58, 183)',
    pointBackgroundColor: 'rgb(103, 58, 183)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
 
  constructor(private _WeatherService : WeatherService, private datePipe: DatePipe,private orderPipe: OrderPipe) { }

  ngOnInit(): void {

    this._WeatherService.historyData().subscribe(data=>{
      console.log(data);
      this.historyData =data;  
      const array=[];

      for(let row of this.historyData.daily){
        const changedt= new Date(row.dt * 1000);
        array.push({...row, dt:changedt})
         let datePipeString = this.datePipe.transform(changedt,'yyyy-MM-dd')
        console.log("rw,,,",row);
        this.lineChartLabels.push(datePipeString.toString());       
      }
      console.log("array", array);
      let copylineChartData=[], min=[];
      this.dailyDate=array
      this.sortedCollection = this.orderPipe.transform(this.dailyDate, 'dt');
      this.dailyDate.map(a => {
        copylineChartData.push(a.temp.max);
        min.push(a.temp.min)
      })
      this.lineChartData = [
        { data:copylineChartData, label: 'max' },
        { data:min, label: 'min' },
      ];
      console.log("lineChartData", this.lineChartData)
})
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
}