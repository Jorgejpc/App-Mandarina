import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from '../models/user';
import { Observable } from 'rxjs/internal/observable';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) { 
    this.usersCollection = afs.collection<UserInterface>('users')
    this.users = this.usersCollection.valueChanges();
  }
  private usersCollection: AngularFirestoreCollection<UserInterface>;
  private users: Observable<UserInterface[]>;

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
  addUser(){}
  updateUser(){}
  deleteUser(){}
}
