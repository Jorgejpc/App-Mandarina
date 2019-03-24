import { Component, OnInit} from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-listacli',
  templateUrl: './listacli.component.html',
  styleUrls: ['./listacli.component.css']
})
export class ListacliComponent implements OnInit {

  constructor(private productService: CrudService) { }
  
  public filtroProduct= '';
  public catProduct= '';
  public alpha=0;
  public beta=0;
  public products= [];

   public product= ''; 

  ngOnInit() {
    this.productService.getProducts().subscribe(products=>{
      this.products = products;

    });
   
  }

  setAlpha(a:number){
  this.alpha=a;
  console.log(this.alpha);
  }
  setBeta(a:number){
    this.beta=a;
    console.log(this.beta);
    }

}
