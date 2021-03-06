import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { createWiresService } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User: object; 
  LogUser: object;
  baseUrl: string;
  LoginError:string
  RegisterError:string

  constructor(private _route: ActivatedRoute, private _router: Router, private _http: HttpClient, @Inject('BASE_URL') baseUrl: string)
  {
    this.User = {
      FirstName : '',
      LastName : '',
      Email : '',
      Password : '',
    },

    this.LogUser = {
      Email : '',
      Password : '',
    }

    this.LoginError =""
    this.RegisterError =""

    this.baseUrl = baseUrl;
  }

  ngOnInit() {
  }

  public RegisterUser()
  {
    this._http.post(this.baseUrl + 'Login/RegisterUser', this.User).subscribe(result => { 
      this._router.navigate(["/landing"]) }, 
      error => {
        console.error(error);
        this.RegisterError = error.error;
      });
  }

  public LoginUser()
  {
    this._http.post(this.baseUrl + 'Login/LoginUser', this.LogUser).subscribe(result => { 
      this._router.navigate(["/landing"]) }, 
      error => {
        console.error(error);
        this.LoginError = error.error;
      });
  }
  
}
