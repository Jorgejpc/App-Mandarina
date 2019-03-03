import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public users = [];
  public user = '';

  ngOnInit() {
    this.dataApi.getAllUsers().subscribe(users => {
      console.log('USERS', users);
      this.users = users; 
    })
  }

}
