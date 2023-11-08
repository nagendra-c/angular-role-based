import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { loginForm } from './login-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  userName:string="";
  password:string="";
  select:string="";
 loginForm!:FormGroup;
 loginFormObj:loginForm = new loginForm();
 constructor(private _fb:FormBuilder,private _AuthService:AuthService, private Router:Router){}
  ngOnInit(): void {
    this.loginForm = this._fb.group({
    user : ['',Validators.required],
    password:['',Validators.required],
    select : ['',Validators.required],
    });
   }

   onLogin(){
    if(this.loginFormObj.user == 'user123' && this.loginFormObj.password == '12345' 
       && this.loginFormObj.select == 'User'){
       this.Router.navigate(['user-dashboard']);
    } else if(this.loginFormObj.user == 'admin' && this.loginFormObj.password == 'admin123' 
    && this.loginFormObj.select == 'Admin'){
       this.Router.navigate(['admin']);
    }
   }

   onSubmit(form:FormGroup){
    console.log(this.loginForm.value);
    this.loginFormObj.user = this.loginForm.value.user;
    this.loginFormObj.password = this.loginForm.value.password;
    this.loginFormObj.select = this.loginForm.value.select;
   

    this._AuthService.userDataPost(this.loginFormObj).subscribe((res) => {
      localStorage.setItem("user",this.loginForm.value["user"]);
      localStorage.setItem("password",this.loginForm.value["password"]);
      localStorage.setItem("select",this.loginForm.value["select"]);
      console.log("Data updated",res);
      alert("Data added succesfully");
    },
      (error)=>{
        alert("Data not added");
      });  
   }
   
}
