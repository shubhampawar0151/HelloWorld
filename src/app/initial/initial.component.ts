import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {

  constructor() { }

  graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'line' },
    ],
    layout: {width: 620, height: 540, title: 'Intialized Chart Demo'}
};

  ngOnInit(): void {
  }

  triggerInitial(event: any){
    console.log("before initialization of chart");
    alert("Initialized chart before event");
  }

  triggerAfter(event: any){
    console.log("after initialization of chart");
    alert("Initialized chart after event");
  }

}
