import { LocalStorageService } from './shared/service/local-storage.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private localStorageService: LocalStorageService){
    if(!this.localStorageService.retrieve('tasks')){
      this.localStorageService.create('tasks', []);
    }
  }


}
