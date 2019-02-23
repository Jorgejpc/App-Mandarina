import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  Productos:any[]=[
    {nombre: 'Mueble',
    precio: '100$',
    apreciacion:'******'
    },
    {nombre: 'Silla',
    precio: '80$',
    apreciacion:'******'
    },
    {nombre: 'Lampara',
    precio: '20$',
    apreciacion:'******'
    },
    {nombre: 'TV',
    precio: '100$',
    apreciacion:'******'
    }
  ]

  constructor() { }
  
  obtenerProducto(){
  return this.Productos;
  }

}
