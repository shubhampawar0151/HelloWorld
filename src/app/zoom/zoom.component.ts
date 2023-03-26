import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent implements OnInit {

  graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'line' },
    ],
    layout: {width: 620, height: 540, title: 'Intialized Chart Demo'}
    
};

config = {
  scrollZoom: true
};

  constructor() { }

  ngOnInit(): void {
  }

}
