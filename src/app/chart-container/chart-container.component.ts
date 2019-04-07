import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.css']
})

export class ChartContainerComponent implements OnInit {
	@Input() chartData: Object = {wordLabels:[],frequencies:[]}; 
	type = 'line';
	data = {
	  labels:[],
	  datasets: [
	    {
	      label: "Word frequency",
	      fill:false,
	      data:[],
	      borderColor:'rgb(0, 173, 255)'
	    }
	  ]
	};
	options = {
	    scales: {
	        xAxes: [{
	            gridLines: {
	                display:false
	            },
	            scaleLabel: {
			        display: true,
			        labelString: 'Words (sorted by rank)',
			        fontSize:20
	      		}  
	        }],
	        yAxes: [{
	            gridLines: {
	                display:false
	            },
	            scaleLabel: {
			        display: true,
			        labelString: 'Frequency',
			        fontSize:20
	      		}   
	        }]
	    },
	    responsive: true,
	  	maintainAspectRatio: true
	}

  constructor() { }

  ngOnInit() {
  	console.log(this.chartData);
  }

  ngOnChanges(changes) {
  	const currentData = this.data || {wordLabels:[], frequencies:[]};
  	this.data = {
	  labels: changes.chartData.currentValue.wordLabels,
	  datasets: [
	    {
	      label: "Word frequency",
	      fill:false,
	      data: changes.chartData.currentValue.frequencies,
	      borderColor:'rgb(0, 173, 255)'
	    }
	  ]
	};
  }

}
