import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth, private crud:CrudService) { }
  public app_name: string = 'BookStore';
  public isLogged: boolean = false;
  public filtroProduct:string;
 
  
  ngOnInit() {
    this.getCurrentUser();
  }
 
  getCurrentUser(){
    this.authService.isAuth().subscribe( auth => {
      if(auth){
        console.log('user logged');
        this.isLogged = true; 
      } else {
        console.log('NOT user logged')
        this.isLogged = false; 
      }
    });
  }

  onLogout(){
    this.afsAuth.auth.signOut();
  }



  


}
