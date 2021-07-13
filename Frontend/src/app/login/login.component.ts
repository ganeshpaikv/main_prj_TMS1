import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  User= {
    emailaddress: '',
    password    : ''
};

LoginError ={
  error : false,
  errorMsg : ''
};

submitted =false;
  constructor(private _auth : AuthService, private _router : Router) { }

  ngOnInit(): void {
  }

  login(){   
      this._auth.loginUser(this.User)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)          
          localStorage.setItem('currentUser', res.users.firstname)
          console.log(res);
          this.LoginError.errorMsg= '';
          this.LoginError.error = false;
          this._router.navigate(['/admin'])
        },
        err => {
          console.log(err);          
          this.LoginError.errorMsg= err.error;
          this.LoginError.error = true;
          ;
          
        }
      ) 
    }
}
