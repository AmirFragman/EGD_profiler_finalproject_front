import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() { }

  navigateTo(route: string) {
    this.router.navigate([route])
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('access token');
    return !!token;
  }
  getUsernameFromLocalStorage(): string | null {
    let username = localStorage.getItem('username');
    if (username){
      username = JSON.parse(username)
    }
    
    return username
  }
}