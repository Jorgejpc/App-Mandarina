import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('btnClose') btnClose: ElementRef;

  ngOnInit() {
  }

  onSaveUser(userForm : NgForm): void{
    
    if(userForm.value.id == null){
      //new
      this.dataApi.addUser(userForm.value);
    }else{
      //update
      this.dataApi.updateUser(userForm.value);
    } 
    userForm.resetForm();
    this.btnClose.nativeElement.click();
  }
}
