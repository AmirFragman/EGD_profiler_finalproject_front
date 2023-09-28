import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private logoutService: AuthenticationService) { }


  loggingOut() {
     const refreshToken = localStorage.getItem('refresh token')

    if (refreshToken) {
      const headerDict = {
        'CONTENT_TYPE': 'application/json',
        'HTTP_AUTHORIZATION': `${refreshToken}`
      }
  
      this.logoutService.logout(headerDict).subscribe(
        () => {

          localStorage.removeItem('access token')
          localStorage.removeItem('refresh token')
        },
        (error) => {
          console.error('Logout failed:', error);
        }
      )
    }
  }
}