import { LocalStorageService } from './../../shared/service/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   user: string = "";
   password: string = "";

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit() {
  }
  login():void{
    debugger
    console.log(event);
    let fullUser = btoa(this.user.concat(this.password));
    this.localStorageService.create('user', fullUser);
    this.router.navigateByUrl('/home');
    
  
  }
}
