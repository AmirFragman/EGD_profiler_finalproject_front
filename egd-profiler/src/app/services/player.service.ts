import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  
  playerOptions: any[] = [];

  private baseUrl = "https://egd-profiler-back.onrender.com/"

  constructor(private http: HttpClient) {
      
  }

  getId(firstName: string, lastName: string): Observable<any> {
    const params = new HttpParams()
      .set('first_name', firstName)
      .set('last_name', lastName);
      
      const url = `${this.baseUrl}/get_id/?${params.toString()}`

      return this.http.get<any>(url)
    }

  getPlayers(){

    const url = `${this.baseUrl}players/`
    return this.http.get<any>(url)
  }

  getPlayer(pin: number): Observable<any>{

    const url = `${this.baseUrl}players/${pin}`
    return this.http.get<any>(url)
  }

  getAccount(){
    const url = `${this.baseUrl}myaccount/`
    return this.http.get<any>(url)
  }
  }