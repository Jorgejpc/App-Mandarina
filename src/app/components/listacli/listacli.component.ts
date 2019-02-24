import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-listacli',
  templateUrl: './listacli.component.html',
  styleUrls: ['./listacli.component.css']
})
export class ListacliComponent implements OnInit {

  constructor(private productService: CrudService) { }

  public products= [];

   public product= ''; 

  ngOnInit() {
    this.productService.getProducts().subscribe(products=>{
      console.log('PRODUCTS', products);
      this.products = products;

    })
   
  }

}
