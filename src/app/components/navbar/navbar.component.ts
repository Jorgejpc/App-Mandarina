import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { DataApiService } from 'src/app/services/data-api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, 
    private afsAuth: AngularFireAuth, 
    private crud:CrudService, 
    private admin: DataApiService, 
    private inhabilitado: DataApiService) { }
    
  public app_name: string = 'BookStore';
  public isLogged: boolean = false;
  public isAdmin: any;
  public isinhabilitado: any;
  public filtroProduct:string;
 

  ngOnInit() {
    this.getCurrentUser();
  }
 
  getCurrentUser(){
    this.authService.isAuth().subscribe( auth => {
      if(auth){
        console.log('user logged', auth);
        this.isLogged = true; 
        this.admin.getOneAdmin(auth.uid).subscribe(data=>{
          this.isAdmin=data;
          console.log('El usuario es admin:',data);
        })
        this.inhabilitado.getOneinhabilitado(auth.uid).subscribe(data=>{
          this.isinhabilitado=data;
          console.log('El usuario esta inhabilitado:',data);
        })
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
