import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserInterface } from '../../../models/user';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private dataApi: DataApiService) { }

  user: UserInterface = {
    name: '',
    email: '',
    admin: '',
    inhabilitado: '',
    id: '',
    
  };
  
  public providerId: string = 'null';
  private users: UserInterface;

  ngOnInit() {
    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.providerId = user.providerData[0].providerId;
        this.user.id = user.uid;
        this.getUser();
      }
    })
  }

  onPreUpDateUser(user: UserInterface){
    this.dataApi.selectedUser = Object.assign({}, user);
  }

  getUser(){
    this.authService.isAuth().subscribe( auth => {
      this.dataApi.getOneUsers(auth.uid).subscribe(data=>{
          this.users=data;
        })
    });
  }
}

