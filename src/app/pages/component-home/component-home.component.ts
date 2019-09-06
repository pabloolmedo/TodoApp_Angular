
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-component-home',
  templateUrl: './component-home.component.html',
  styleUrls: ['./component-home.component.scss']
})
export class ComponentHomeComponent implements OnInit {

  weathers = {};
  loading: boolean;



  constructor() { }

  ngOnInit() {


  }
  obteinLoading(e) {
    this.loading = e;
   
  }
  obteinWeather(e) {

    this.weathers = e;


  }





}
