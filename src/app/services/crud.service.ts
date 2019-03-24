import { Injectable } from '@angular/core';
import{AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../models/producto';


@Injectable({
  providedIn: 'root'
})
export class CrudService {



  constructor(private afs: AngularFirestore) {
    this.productCollection = afs.collection<Producto>('products');
    this.products = this.productCollection.valueChanges();

   }


  private productCollection: AngularFirestoreCollection<Producto>;
  private products: Observable<Producto[]>;
  private productDoc: AngularFirestoreDocument<Producto>;
  private product: Observable<Producto>;
  public selectedProduct: Producto ={
    id:null
  };
  


  getProducts(){
    return this.products = this.productCollection.snapshotChanges()
    .pipe(map(changes=>{
      return changes.map(action =>{
        const data = action.payload.doc.data() as Producto;
        data.id = action.payload.doc.id;
        return data;
      })

    }));
  }

  getOneProduct( idProduct: string){
    this.productDoc = this.afs.doc<Producto>(`products/${idProduct}`);
    return this.product = this.productDoc.snapshotChanges()
    .pipe(map(action=>{action.payload.data()
      if(action.payload.exists == false){
        return null;
      } else{
        const data = action.payload.data() as Producto;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  insertProduct(product: Producto): void{
    product.comentarios=[];
    this.productCollection.add(product);
  }

  updateProduct(product: Producto): void{
   let idProduct= product.id;
   this.productDoc = this.afs.doc<Producto>(`products/${idProduct}`);
   this.productDoc.update(product);

  }

  deleteProduct(idProduct: string): void{
    this.productDoc = this.afs.doc<Producto>(`products/${idProduct}`);
    this.productDoc.delete();
  }

 


}
