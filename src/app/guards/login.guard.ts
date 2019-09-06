import { LocalStorageService } from './../shared/service/local-storage.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private localStorageService: LocalStorageService){}


  canActivate(): boolean{
    console.log("paso por el guard");

   if(this.localStorageService.retrieve('user')){
     return true;
     
   }
   else{
     this.router.navigateByUrl('/login');
     return false;
   }
   
   
   
    
  }
  
}
