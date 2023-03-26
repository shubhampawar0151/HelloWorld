import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {

  graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'line' },
    ],
    layout: {width: 620, height: 540, title: 'Click Event Demo'}
};

  constructor() { }

  ngOnInit(): void {
  }

  triggerClick(event : any){
    console.log("Clicked on chart !!! ",event.points[0]);
    alert("Clicked data  x : "+event.points[0].x+ " , y : "+event.points[0].y);
  }

}
