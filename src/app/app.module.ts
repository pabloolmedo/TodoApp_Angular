import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule } from './shared/shared.module';



import { ComponentHomeComponent } from './pages/component-home/component-home.component';
import { MyTasksComponent } from './pages/my-tasks/my-tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponent } from './pages/component-home/components/weather/weather.component'

@NgModule({
  declarations: [
    AppComponent,
    ComponentHomeComponent,
    MyTasksComponent,
    WeatherComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
