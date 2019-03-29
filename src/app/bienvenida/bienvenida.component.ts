import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataApiService } from '../services/data-api.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private inhabilitado: DataApiService) { }

  isLogged: boolean;
  public isInhabilitado: any;

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.authService.isAuth().subscribe( auth => {
      if(auth){
        this.isLogged = true; 
        this.inhabilitado.getOneinhabilitado(auth.uid).subscribe(data=>{
          this.isInhabilitado=data;
        })
        
      } else {
        this.isLogged = false; 
      }
    });
  }
}
