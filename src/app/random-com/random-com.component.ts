import { Component, OnInit } from '@angular/core';
import { PlotlyService } from 'angular-plotly.js';

@Component({
  selector: 'app-random-com',
  templateUrl: './random-com.component.html',
  styleUrls: ['./random-com.component.css']
})
export class RandomComComponent implements OnInit {

  private plotly: any;
  constructor(private plotlyService: PlotlyService) { 
    plotlyService.getPlotly().then((plotly) => (this.plotly = plotly));
  }


  ngOnInit(): void {
  }

  newGraph = {
    data: [
      {
        x: [1, 2, 3],
        y: [0, 0.5, 1],
        line: { simplify: false },
      },
    ],
    layout: { width: 620, height: 540, title: 'Animation Graph' },
  };

  public randomize() {
    this.plotly?.animate('myGraph', {
      data: [{ y: [Math.random(), Math.random(), Math.random()] }],
    });
  }

}
