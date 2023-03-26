import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hover',
  templateUrl: './hover.component.html',
  styleUrls: ['./hover.component.css']
})
export class HoverComponent implements OnInit {

  constructor() { }

  graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'line' },
    ],
    layout: {width: 520, height: 540, title: 'Hover Chart Demo'}
};

  ngOnInit(): void {
  }

  triggerHover(event : any){
    alert("Hovered data  x : "+event.points[0].x+ " , y : "+event.points[0].y);
  }

}
