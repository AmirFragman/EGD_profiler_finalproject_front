import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignupformComponent } from './components/signupform/signupform.component';
import { PlayersComponent } from './components/players/players.component';
import { UsersComponent } from './components/users/users.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'signup', component: SignupformComponent },
  { path: 'login', component: LoginComponent },
  { path: 'players', component: PlayersComponent},
  { path: 'users', component: UsersComponent},
  { path: 'myaccount', component: MyaccountComponent},
  { path: 'tournaments', component: TournamentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
