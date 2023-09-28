import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http'
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DatePipe } from '@angular/common';
import { SignupformComponent } from './components/signupform/signupform.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { PlayersComponent } from './components/players/players.component';
import { UsersComponent } from './components/users/users.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomepageComponent,
    SignupformComponent,
    LogoutComponent,
    MyaccountComponent,
    PlayersComponent,
    UsersComponent,
    TournamentsComponent,    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ScrollingModule,
    HttpClientModule,


  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
