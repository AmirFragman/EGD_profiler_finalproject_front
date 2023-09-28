import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { TournamentsService } from 'src/app/services/tournaments.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit{
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['index', 'tournament_code', 'date', 'description', 'city', 'country', 'class', 'rounds', 'total_players']

  constructor(private tournamentServ: TournamentsService){}

  ngOnInit() {
    this.getTournamentsData();    
  }
  getTournamentsData() {
    
    this.tournamentServ.getTournaments().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource<any>(data)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      },
      (error) => {
        console.error('Error fetching Tournaments:', error);
      }
    );
  }
  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator 

}
