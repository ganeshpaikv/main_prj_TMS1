import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 user={email:"",
 password:""}

 server_address : string ='/api';

  constructor(private http : HttpClient) { }

  loginUser(user:any)
  {
    return this.http.post<any>(`http://localhost:3000/login`, user)
  }

  SignUpUser(user:any)
  {
    return this.http.post<any>('http://localhost:3000/signup', {"user":user})
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }

  getToken()
  {
    return localStorage.getItem('token')
  }

  getCurrentUser()
  {
    return localStorage.getItem('currentUser')
  }
  

}
