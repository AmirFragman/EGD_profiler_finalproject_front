import { Component, OnInit, ViewChild} from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit{
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['index', 'egdId', 'name', 'country', 'gor', 'rank', 'totalTournaments']
  
  constructor(private playerService: PlayerService){}

  ngOnInit() {
    this.getPlayersData();    
  }

  getPlayersData() {
    
    this.playerService.getPlayers().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource<any>(data)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      },
      (error) => {
        console.error('Error fetching players:', error);
      }
    );
  }
  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator 
}
