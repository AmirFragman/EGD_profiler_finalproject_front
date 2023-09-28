import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['id', 'username', 'last_name', 'first_name', 'email', 'egd_id', 'birth_date', 'gender', 'is_staff', 'is_superuser', 'edit']
  username: string = ''
  users: any[] = []; // Populate this array with user data from your API
  editedUser: any = null;
  editUserId: number
  originalUser: any = {}

  editedUserData: any = {
    username: '',
    last_name: '',
    first_name: '',
    email: '',
    egd_id: '',
    birth_date: '',
    gender: '',
    is_superuser: '',
    is_staff: ''
  };

  constructor(private user: UserService) { }

  ngOnInit() {
    this.usersData()
  }


  usersData() {
    this.user.getUsers().subscribe(
      (data) => {
        console.log(data);
        
        this.dataSource = data
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      },
      (error) => {
        console.error('Error fetching users: ', error);
      }
    )
  }
  getUser(username: string){
    this.user.getUserData(this.username)
  }

  editUser(user: any) {
    this.editedUser = { ...user };
    this.editUserId = user.id    
  }
  saveChanges() {
    const username = this.editedUser.username;
   
    for (const prop in this.editedUserData) {
      if (this.editedUserData.hasOwnProperty(prop)) {
        if (!this.editedUserData[prop]) {
          this.editedUserData[prop] = this.originalUser[prop];
        }
      }
    }

    const data = this.editedUserData
    this.user.updateUserData(username, data).subscribe(
      (response) => {

        this.editUserId = -1;
      },
      (error) => {
        // Handle error, e.g., display an error message to the user
        console.error('Error updating user data:', error);
      }
    );
  }
  cancelEdit() {
    this.editUserId = -1;
  }

applyFilter(filterValue: string){
  this.dataSource.filter = filterValue.trim().toLowerCase()
}
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator 
}