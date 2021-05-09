import { UserServiceService } from './../../../service/user-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginError : boolean = false;
  constructor(private userService : UserServiceService,private router : Router) { }

  ngOnInit() {
  }

  OnSubmit(userName,password){
    this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
     localStorage.setItem('userToken',data.access_token);
     this.router.navigate(['/Shop']);
   },
   (err : HttpErrorResponse)=>{
     this.isLoginError = true;
   });
 }

}
