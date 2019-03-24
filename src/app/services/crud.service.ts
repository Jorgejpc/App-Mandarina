import { Injectable } from '@angular/core';
import{AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../models/producto';
import { UserInterface } from '../models/user';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class CrudService {



  constructor(private afsAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.productCollection = afs.collection<Producto>('products');
    this.products = this.productCollection.valueChanges();
    this.getCurrentUser();
    this.db=afs.collection<UserInterface>('users');
    this.carrito = this.db.doc(this.idUser).collection<Producto>('carrito').valueChanges();
   }


  private productCollection: AngularFirestoreCollection<Producto>;
  private products: Observable<Producto[]>;
  private carrito: Observable<Producto[]>;
  private productDoc: AngularFirestoreDocument<Producto>;
  private product: Observable<Producto>;
  public selectedProduct: Producto ={
    id:null
  };
  private db:AngularFirestoreCollection<UserInterface>;
  private idUser:string='123';
  


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

  mandarCarrito(idProduct:Producto){
    var messageRef = this.db.doc(this.idUser).collection('carrito').add(idProduct);
}
isAuth() {
  return this.afsAuth.authState.pipe(map(auth => auth));
}
getCurrentUser(){
  this.isAuth().subscribe( auth => {
    if(auth){
      this.idUser=auth.uid;
      }        
    }) 
  }

getCarrito(){
  
  return this.carrito = this.db.doc(this.idUser).collection('carrito').snapshotChanges()
  .pipe(map(changes=>{
    return changes.map(action =>{
      const data = action.payload.doc.data() as Producto;
      data.id = action.payload.doc.id;
      return data;
    })

  }));
}
 


}
