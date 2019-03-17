import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { UserInterface } from 'src/app/models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modaluser',
  templateUrl: './modaluser.component.html',
  styleUrls: ['./modaluser.component.css']
})
export class ModaluserComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
  }

  onSaveBook(userForm : NgForm): void{
    //new
    this.dataApi.addUser(userForm.value);
    //update
  }
}
