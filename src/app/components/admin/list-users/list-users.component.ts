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
  private users: UserInterface [];

  ngOnInit() {
   this.getListUsers();
  }

  getListUsers(){
    this.dataApi.getAllUsers().subscribe( users => {
      this.users = users; 
    })
  }

  onDeleteUser(idUser: string): void{
    const confirmacion = confirm('El usuario sera eliminado, esta seguro?');
    if(confirmacion){
      this.dataApi.deleteUser(idUser);  
    }
  }

  onPreUpDateUser(user: UserInterface){
    console.log('USER', user);
    this.dataApi.selectedUser = Object.assign({}, user);
  }
  
}