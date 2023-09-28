import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 export class AppComponent  {
  title = 'egd-profiler';
  constructor(private router: Router) {}

  

  goToSignup() {
    this.router.navigate(['/signup']);
  }

}
// implements OnInit{
//   constructor(private backendService: BackendService){}

//   ngOnInit(): void {
//     this.backendService.getSomeData().subscribe((data) => {
//       // Handle the data returned from the backend here
//     });
//   }