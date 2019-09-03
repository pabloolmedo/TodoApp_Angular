import { WeatherServiceService } from './../../../../shared/service/weather-service.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public currentWeather:object;
  @Output() newWeather = new EventEmitter<any>();
  @Output() isLoadingEvent = new EventEmitter<any>();

  constructor(private weatherService: WeatherServiceService) { }
  isLoading:boolean = false;
ngOnChanges(){
  
}
  ngOnInit() {
    this.getWeatherDaily("cordoba");
  }

   //Metodo Get que pega a la API 
   getWeatherDaily(param: string): void {
    this.isLoadingEvent.emit(!this.isLoading);
    let params: {};
    params = {
      q: param + ", ar",
      units : "metric",
      type : "accurate"
    }


    this.weatherService.getWeather(params).subscribe(
      res => {
        
        
        this.currentWeather = res;
        // console.log(this.currentWeather);
        this.isLoadingEvent.emit(this.isLoading);
        this.newWeather.emit(this.currentWeather);

        
      
      },
     error =>{
      console.log(error);
      this.isLoadingEvent.emit(this.isLoading);
     } 
    )
    
    
    
  }


}
