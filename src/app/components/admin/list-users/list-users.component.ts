import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { UserInterface } from '../../../models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private users = [];

  ngOnInit() {
   this.getListUsers();
  }

  getListUsers(){
    this.dataApi.getAllUsers().subscribe( users => {
      this.users = users; 
    })
  }

  onDeleteUser(){
    console.log('DELETE USER');
  }
  

}
