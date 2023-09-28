import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  apiUrl = 'http://127.0.0.1:8000/login/'
  username: string = '';
  password: string = '';

  constructor(
    private loginServer: LoginService,
    private router: Router
    )
   { }

   navigateTo(route: string) {
    this.router.navigate([route])
  }

  async login(username: string, password: string) {
    try {
      const response = await this.loginServer.serverLogin({
        username: username,
        password: password,
      }).toPromise();

      if (response && response.access && response.refresh) {
        console.log('Login successful');
        this.navigateTo('myaccount')
      } else {
        console.error('Login failed: Invalid response');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

}

