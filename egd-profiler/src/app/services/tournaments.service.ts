import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TournamentsService {


  constructor(private http: HttpClient) { }

  getTournaments(){
    return this.http.get<any>(`https://egd-profiler-back.onrender.com/tournaments/`)
  }
  
}
