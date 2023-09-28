import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyaccountService {
  username = localStorage.getItem('username')
  requestBody: any
  usernameObject: any
  private apiUrl = "https://egd-profiler-back.onrender.com/myaccount/"

  constructor(private http: HttpClient) { }



getData(): Observable<any> {
   
  if (this.username){
    this.usernameObject = JSON.parse(this.username);
  }
  
  this.requestBody = { username: this.usernameObject };
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  return this.http.post<any>(this.apiUrl, this.requestBody, {headers: headers})

}
}