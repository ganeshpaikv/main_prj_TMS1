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
    email: '',
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
      .subscribe(res=>{
          localStorage.setItem('token', res.tok)   
          localStorage.setItem('Approvalstatus', res.approval)         
          localStorage.setItem('currentUser', this.User.email);
          
          if (this.User.email=="tmsadmn@gmail.com")
          this._router.navigate(['/admin'])
          else{
            this._router.navigate(['/user'])
          }
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
