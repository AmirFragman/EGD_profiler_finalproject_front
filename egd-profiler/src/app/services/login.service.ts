import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  access = '';
  current_user_id = 0;
  apiUrl = 'https://egd-profiler-back.onrender.com/login/'

  constructor(private server: HttpClient) { }
  
  serverLogin(credentials: any): Observable<any> {
    return this.server.post<any>(this.apiUrl, credentials).pipe(
      map((response: any) => {
        if (response && response.access) {
                    
          localStorage.setItem('access token', JSON.stringify(response.access));
          localStorage.setItem('refresh token', JSON.stringify(response.refresh))
          localStorage.setItem('username', JSON.stringify(credentials.username))
          console.log(response);
          
        }
        return response;
      })
    );
    }
    
    }
  
