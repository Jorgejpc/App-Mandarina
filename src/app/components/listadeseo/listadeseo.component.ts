import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-listadeseo',
  templateUrl: './listadeseo.component.html',
  styleUrls: ['./listadeseo.component.css']
})
export class ListadeseoComponent implements OnInit {

  constructor(private servicioCarrito: CrudService) { }
  public products:Producto[];


  ngOnInit() {
    this.servicioCarrito.getWishList().subscribe(deseos=>{
      this.products = deseos; 
  
    });
  }
  onDeleteProduct(id:any){
    const confirmacion =  confirm('Estas seguro?');
    if(confirmacion)
    this.servicioCarrito.deleteProductDeseos(id);

  }

}
