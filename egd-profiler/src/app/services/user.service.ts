import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userStepperFormGroup: any;
  usernameControl: any;
  

  constructor(private http: HttpClient) { }

  checkUserExists(username: string): Observable<any> {
    return this.http.get<boolean>(`https://egd-profiler-back.onrender.com/check-user-exists/${username}`)
  }

  getUsers(){
    return this.http.get<any>(`https://egd-profiler-back.onrender.com/users/`)
  }

  getUserData(username: string){
    return this.http.get<any>(`https://egd-profiler-back.onrender.com/users/${username}`)
  }

  updateUserData(username: string, data: any){

    return this.http.put<any>(`https://egd-profiler-back.onrender.com/users/${username}`, data)
  }
}


