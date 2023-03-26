import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-svg',
  templateUrl: './export-svg.component.html',
  styleUrls: ['./export-svg.component.css']
})
export class ExportSVGComponent implements OnInit {

  constructor() { }

  config = {
    toImageButtonOptions: {
      format: 'svg', // one of png, svg, jpeg
      filename: 'custom_image',
      height: 500,
      width: 700,
      scale: 1 
    }
  };

  graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'line' },
    ],
    layout: {width: 620, height: 540, title: 'Export SVG Demo'}
};

  ngOnInit(): void {
  }

}
