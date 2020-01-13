import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLogin = true;
  public txt_Email_new: any = "";
  public loading = false;
  public user: any = {
    Email: "",
    Password: ""
  };

  constructor(  private routerObj: Router) { }

  ngOnInit() {

  }
  login(){
    console.log("login");
    this.routerObj.navigate(['']);
  }
}
