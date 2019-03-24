import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from '../models/user';
import { Observable } from 'rxjs/internal/observable';
import { map } from 'rxjs/operators';
import { User } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) { 
    this.usersCollection = afs.collection<UserInterface>('users');
    this.users = this.usersCollection.valueChanges();
  }

  private usersCollection: AngularFirestoreCollection<UserInterface>;
  private users: Observable<UserInterface[]>;
  private userDoc: AngularFirestoreDocument<UserInterface>;
  private user: Observable<UserInterface>;
  public selectedUser: UserInterface = {
    id: null

  };

  getAllUsers(){
    return this.users = this.usersCollection.snapshotChanges()
    .pipe(map( changes =>{
      return changes.map( action => {
        const data = action.payload.doc.data() as UserInterface;
        data.id = action.payload.doc.id;
        return data; 
      });
    }));
  }

  addUser(user: UserInterface): void {
    user.carrito=[];
    this.usersCollection.add(user);
  }

  updateUser(user: UserInterface): void {

    let idUser = user.id;
    this.userDoc = this.afs.doc<UserInterface>(`users/${idUser}`);
    this.userDoc.update(user);
    this.userDoc.update(user);
  }
  deleteUser(idUser: string): void{
    this.userDoc = this.afs.doc<UserInterface>(`users/${idUser}`);
    this.userDoc.delete();
  }
  getOneUser( idUser: string){
    this.userDoc = this.afs.doc<UserInterface>(`users/${idUser}`);
    return this.user = this.userDoc.snapshotChanges()
    .pipe(map(action=>{action.payload.data()
      if(action.payload.exists == false){
        return null;
      } else{
        const data = action.payload.data() as UserInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  getOneAdmin( idUser: string){
    this.userDoc= this.afs.doc<UserInterface>(`users/${idUser}`);
    return this.userDoc.snapshotChanges()
    .pipe(map(action=>{action.payload.data()
      console.log(action.payload.data())
        const data = action.payload.data() as UserInterface;
        return data.admin;
    }));
  }

  getOneinhabilitado( idUser: string){
    this.userDoc= this.afs.doc<UserInterface>(`users/${idUser}`);
    return this.userDoc.snapshotChanges()
    .pipe(map(action=>{action.payload.data()
      console.log(action.payload.data())
        const data = action.payload.data() as UserInterface;
        return data.inhabilitado;
    }));
  }

  

}





