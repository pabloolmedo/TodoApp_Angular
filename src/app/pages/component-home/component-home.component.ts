
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-component-home',
  templateUrl: './component-home.component.html',
  styleUrls: ['./component-home.component.scss']
})
export class ComponentHomeComponent implements OnInit {
 
 weather = {};


  constructor() { }

  ngOnInit() {

    
  }
  obteinWeather(e){
     console.log(e);
     this.weather = e;
  }


 

}
