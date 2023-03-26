import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { PlotlyService } from 'angular-plotly.js';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#f00', '#0f0', '#0ff'],
  };

  data = [
    { 'name' : "> 95", 'value' : 765 },
    {'name' : "90 - 94", 'value' : 123},
    {'name' : "< 90", 'value' : 84}
  ]

   config = {
    toImageButtonOptions: {
      format: 'svg', // one of png, svg, jpeg, webp
      filename: 'custom_image',
      height: 500,
      width: 700,
      scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
    }
  };


  graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'line' },
    ],
    layout: {width: 320, height: 240, title: 'A Fancy Plot'}
};



 trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: 'markers',
  type: 'scatter'
};

 trace2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 9],
  mode: 'lines',
  type: 'scatter'
};

 trace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: 'lines+markers',
  type: 'scatter'
};

 trace4 = {
  x: ['giraffes', 'orangutans', 'monkeys'],
  y: [20, 14, 23],
  name: 'SF Zoo',
  type: 'bar'
};

 trace5 = {
  x: ['giraffes', 'orangutans', 'monkeys'],
  y: [12, 18, 29],
  name: 'LA Zoo',
  type: 'bar'
};

omarkersChart = {
  data : [
    this.trace1
   ],
   layout : {width: 320, height: 240, title: 'A Markers Plot'}
}

scatterPlot = {
  data : [
   this.trace1, this.trace2, this.trace3
  ],
  layout : {width: 320, height: 240, title: 'A Scatter Plot'}
 }

 barChartPlot = {
  data : [
   this.trace4, this.trace5
  ],
  layout : {width: 320, height: 240, title: 'A Bar Chart Plot'
  // ,barmode: 'stack'    
}

 }

 pieChart = {
  data :[{
    values: [19, 26, 55],
    labels: ['Residential', 'Non-Residential', 'Utility'],
    type: 'pie'
  }],
  layout : {width: 320, height: 240, title: 'A Pie Chart Plot'}
 }

 newGraph = {
  data: [
    {
      x: [1, 2, 3],
      y: [0, 0.5, 1],
      line: { simplify: false },
    },
  ],
  layout: { width: 320, height: 240, title: 'A Fancy Plot' },
};
 private plotly: any;
  constructor(private plotlyService: PlotlyService) { 
    plotlyService.getPlotly().then((plotly) => (this.plotly = plotly));
  }

  ngOnInit(): void {
  }


  triggerClick(event : any){
    console.log("Clicked on chart !!! ",event.points[0]);
    alert("Clicked data  x : "+event.points[0].x+ " , y : "+event.points[0].y);
  }

  triggerHover(event : any){
    console.log("Hovered on chart !!! ",event.points[0]);
    alert("Hovered data  x : "+event.points[0].x+ " , y : "+event.points[0].y);
  }

  triggerAfterExport(event: any){
    alert("Exported chart after event");
  }

  triggerInitial(event: any){
    alert("Exported chart before event");
  }

  triggerAfter(event: any){
    alert("Exported chart after event");
  }

  public randomize() {
    this.plotly?.animate('myDiv', {
      data: [{ y: [Math.random(), Math.random(), Math.random()] }],
    });
  }


}
