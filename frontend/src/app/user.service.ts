import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  register(body:any){
    return this._http.post('http://localhost:3000/users/register', body, {
      observe:'body',
      headers:new HttpHeaders().append('content-type','application/json')
    });
  }
  login(body:any){
    return this._http.post('http://localhost:3000/users/login', body, {
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('content-type','application/json')
    }
  )}

  user(){
    return this._http.get('http://localhost:3000/users/user', {
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('content-type','application/json')

    })

  }

  logout(){
    return this._http.get('http://localhost:3000/users/logout', {
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('content-type','application/json')

  }
  
)}
}
