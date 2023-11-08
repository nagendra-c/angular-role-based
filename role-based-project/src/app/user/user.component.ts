import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
 usersData:any;
 constructor(private _AuthService:AuthService, private Router:Router){}
  ngOnInit(): void {
  }
  fetchUsersApi(){
    this._AuthService.getUserApi().subscribe(res => this.usersData = res);
    console.log(this.usersData); 
  }
  logoutUser(){
    this.Router.navigate(["login"]);
  }

}
