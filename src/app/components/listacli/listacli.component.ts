import { Component, OnInit} from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-listacli',
  templateUrl: './listacli.component.html',
  styleUrls: ['./listacli.component.css']
})
export class ListacliComponent implements OnInit {

  constructor(
    private productService: CrudService, 
    private _service: CrudService,
    private ruta: ActivatedRoute,) { }
  
  public filtroProduct= '';
  public catProduct= '';
  public alpha=0;
  public beta=0;
  public products= [];

   public product= ''; 

   public productoClik: Producto;

  public isAdmin: any;

  private iProduct;

  ngOnInit() {
    this.productService.getProducts().subscribe(products=>{
      this.products = products;

    });

    const idProduct = this.ruta.snapshot.params['id'];
    this.getDetails(idProduct);
   
  }
  getDetails(idProduct: string ): void{
    this.iProduct=idProduct;
    this._service.getOneProduct(idProduct).subscribe( productoClik =>{
      this.productoClik = productoClik;
    })
  }
  setAlpha(a:number){
  this.beta=0;  
  this.alpha=a;
  console.log(this.alpha);
  }
  setBeta(a:number){
    this.alpha=0;
    this.beta=a;
    console.log(this.beta);
  }

  

}
