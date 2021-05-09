import { UserServiceService } from './../../../service/user-service.service';
import { User } from '../../../models/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:User;

emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private userservice:UserServiceService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      Username: '',
      Password: '',
      Email: '',
      Firstname:'',
      Lastname:''
     
    }
  }

  OnSubmit(form: NgForm) {
   this.userservice.registeruser(form.value)
   .subscribe((data: any) => {
    if (data.Succeeded == true) {
      this.resetForm(form);
   }
    
    alert('User registration successful');
    this.resetForm(form);
  });
  }

}
