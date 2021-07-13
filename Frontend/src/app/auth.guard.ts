import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth:AuthService,private _router:Router)  {  }
  canActivate():boolean{
    // return false;
    if (this._auth.loggedIn())
    {
      console.log('logged in :true');
      return true

    }
    else{
      console.log('logged in :false')
      this._router.navigate(['/login'])
      return false
    }
  }
  
}
