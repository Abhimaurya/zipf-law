import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
  title = 'zipf-law';
  showLoader=false;
  chartData={
  	wordLabels:[],
  	frequencies:[]
  };
  toggleLoader(){
  	this.showLoader = !this.showLoader;
  }
  setChartData(obj){
  	this.chartData = obj;
  }
}
