import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Producto } from 'src/app/models/producto';
import { ActivatedRoute, Params} from '@angular/router';
import { UserInterface } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from 'src/app/services/data-api.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

  constructor(
    private ruta: ActivatedRoute,
    private _service: CrudService,
    private authService: AuthService,
    private UserA: DataApiService) { }

  public product:Producto;
  public idUser: any;
  private db:AngularFirestore;
  private iProduct;
  
  ngOnInit() {
    const idProduct = this.ruta.snapshot.params['id'];
    this.getDetails(idProduct);
    this.getCurrentUser();
    
  }
  getDetails(idProduct: string ): void{
    this.iProduct=idProduct;
    this._service.getOneProduct(idProduct).subscribe( product =>{
      this.product = product;



    })
  }

  getCurrentUser(){
    this.authService.isAuth().subscribe( auth => {
      if(auth){
        this.idUser=auth.uid
        }        
      }) 
    }

   
}
