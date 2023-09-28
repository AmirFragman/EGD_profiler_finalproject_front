import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { MyaccountService } from 'src/app/services/myaccount.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  username: string | null = localStorage.getItem('username')
  usernameObject: any
  @ViewChild('winsLossesChart', { static: true }) winsLossesChart: ElementRef;
  @ViewChild('totalGamesBlackChart', { static: true }) totalGamesBlackChart: ElementRef;
  @ViewChild('totalGamesWhiteChart', { static: true }) totalGamesWhiteChart: ElementRef;
  data = {
    total_tournaments: null,
    total_matches: null,
    total_wins: null,
    total_loses: null,
    total_black_matches: null,
    total_white_matches: null,
    total_black_wins: null,
    total_black_loses: null,
    total_white_wins: null,
    total_white_loses: null,
  }
  userData = {
    username: '',
    last_name: '',
    first_name: '',
    email: '',
    egd_id: '',
    birth_date: '',
    gender: '',
  };
  constructor(private account: MyaccountService,
              private userServ:UserService) { }

  ngOnInit() {
    this.requestData()
  }

  requestData() {
    this.account.getData().subscribe(response => {
      this.data = response
      this.createTotalWinsLossesChart();
      this.createTotalGamesBlackChart();
      this.createTotalGamesWhiteChart();
    
    })
  }

  createTotalWinsLossesChart() {
    const ctx = this.winsLossesChart.nativeElement.getContext('2d');
    const total_games = this.data.total_matches
    const wins = this.data.total_wins; // Replace with actual number of wins
    const losses = this.data.total_loses; // Replace with actual number of losses

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Total Wins', 'Total Losses'],
        datasets: [{
          data: [wins, losses],
          backgroundColor: ['black', 'white'],
          borderColor: 'gray', // Add this line to set the border color to gray
          borderWidth: 1,
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: `You've played total of games: ${total_games}!`,
          },
        }
      }
    });
  }

  total_wins_percentage(): string{
    if(this.data.total_wins && this.data.total_matches){
      const total_percentage = ((this.data.total_wins / this.data.total_matches) * 100).toFixed(2)
      return total_percentage
    }
    return 'N/A'
  } 

  createTotalGamesBlackChart() {
    const ctx = this.totalGamesBlackChart.nativeElement.getContext('2d');
    const total_games = this.data.total_black_matches
    const wins = this.data.total_black_wins;
    const losses = this.data.total_black_loses;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Wins as black', 'Losses as black'],
        datasets: [{
          data: [wins, losses],
          backgroundColor: ['black', 'white'],
          borderColor: 'gray', // Add this line to set the border color to gray
          borderWidth: 1,
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: `You've played total of games as black: ${total_games}!`,
          },
        }
      }
    });
  }
  black_wins_percentage(): string{
    if(this.data.total_black_wins && this.data.total_black_matches){
      const total_percentage = ((this.data.total_black_wins / this.data.total_black_matches) * 100).toFixed(2)
      return total_percentage
    }
    return 'N/A'
  } 
  createTotalGamesWhiteChart() {
    const ctx = this.totalGamesWhiteChart.nativeElement.getContext('2d');
    const total_games = this.data.total_white_matches
    const wins = this.data.total_white_wins;
    const losses = this.data.total_white_loses;

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Wins as white', 'Losses as white'],
        datasets: [{
          data: [wins, losses],
          backgroundColor: ['white', 'black'],
          borderColor: 'gray', // Add this line to set the border color to gray
          borderWidth: 1,
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: `You've played total of games as white: ${total_games}`,
          },
        }
      }
    });
  }
  white_wins_percentage(): string{
    if(this.data.total_white_wins && this.data.total_white_matches){
      const total_percentage = ((this.data.total_white_wins / this.data.total_white_matches) * 100).toFixed(2)
      return total_percentage
    }
    return 'N/A'
  } 

  usernameParsed(){
    if(this.username){
    const parsedUsername = JSON.parse(this.username)
    return parsedUsername}
  } 
}
