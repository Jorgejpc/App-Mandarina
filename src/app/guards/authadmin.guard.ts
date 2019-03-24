import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, map, tap } from 'rxjs/operators';
import { DataApiService } from 'src/app/services/data-api.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthadminGuard implements CanActivate {
  
  constructor(private afsAuth: AngularFireAuth,
    private router: Router, 
    private admin: DataApiService,
    private authService: AuthService,) { }

    public isAdmin: any;

    canActivate(
     next: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
 
     return this.afsAuth.authState
       .pipe(take(1))
       .pipe(map(authState => !!authState))
       .pipe(tap(auth => {
         if (!auth) { //si no esta loguado 
           this.router.navigate(['/user/login']);
         }
         else{  // si esta logueado
          this.authService.isAuth().subscribe( auth => {
              console.log('a ver cuanto entro aqui');
              
              this.admin.getOneAdmin(auth.uid).subscribe(data=>{
                this.isAdmin=data;
                if(data=='false'){ //no es admin
                  this.router.navigate(['']);
                }
              })
          });
         }
       }));
   }

 }
