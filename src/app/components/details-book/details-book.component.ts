import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Producto } from 'src/app/models/producto';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

  constructor(
    private ruta: ActivatedRoute,
    private _service: CrudService) { }

  public product:Producto;

  ngOnInit() {
    const idProduct = this.ruta.snapshot.params['id'];
    this.getDetails(idProduct);
    
  }
  getDetails(idProduct: string ): void{

    this._service.getOneProduct(idProduct).subscribe( product =>{
      this.product = product;


    })
  }

}
