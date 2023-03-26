import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loadHome(){
    this.router.navigate(['home']);
  }

  loadFetch(){
    this.router.navigate(['fetch']);
  }

  loadStore(){
    this.router.navigate(['store']);
  }

  loadClick(){
    this.router.navigate(['click']);
  }

  loadInitial(){
    this.router.navigate(['initial']);
  }
  loadHover(){
    this.router.navigate(['hover']);
  }
  loadZoom(){
    this.router.navigate(['zoom']);
  }
  loadAnimation(){
    this.router.navigate(['animation']);
  }
  loadSVG(){
    this.router.navigate(['export']);
  }


}
