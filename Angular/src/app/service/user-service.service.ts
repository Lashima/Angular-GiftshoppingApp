import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http: HttpClient) { }
  readonly apiUrl="http://localhost:58231";
  registeruser(user:User){
    const body: User = {
      Username: user.Username,
      Password: user.Password,
      Email: user.Email,
      Firstname :user.Firstname,
      Lastname:user.Lastname
     
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.apiUrl+ '/api/Register',body,{headers : reqHeader});
  }

  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.apiUrl + '/token', data, { headers: reqHeader });
  }

}
