import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = 'https://egd-profiler-back.onrender.com/';

  constructor(private http: HttpClient) {}



  emailCheckAvailability(value: string): Observable<any>{
    const params = new HttpParams()
    .set('email', value)
    return this.http.get<boolean>(`${this.apiUrl}check_email_exists/?${params.toString()}`);
  }
  usernameCheckAvailability(value: string): Observable<any> {
    const params = new HttpParams()
    .set('username', value)
    return this.http.get<boolean>(`${this.apiUrl}check_username_exists/?${params.toString()}`);
  }
 
  logout(headerDict: any): Observable<any> {
    
    const headers = new HttpHeaders(headerDict)      
   
    return this.http.post<boolean>(`${this.apiUrl}logout/`, { headers });
}
}