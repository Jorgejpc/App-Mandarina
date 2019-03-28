import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { UserInterface } from 'src/app/models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modalprofile',
  templateUrl: './modalprofile.component.html',
  styleUrls: ['./modalprofile.component.css']
})
export class ModalprofileComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose') btnClose: ElementRef;

  ngOnInit() {
  }

  onSaveProfile(profileForm: NgForm): void{
    this.dataApi.updateUser(profileForm.value);
    profileForm.resetForm();
    this.btnClose.nativeElement.click();
  }
}