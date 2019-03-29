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
    private inhabilitado: DataApiService,
    private authService: AuthService,) { }

    public isAdmin: any;
    public isInhabilitado: any;

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
     // si esta logueado
     this.authService.isAuth().subscribe( auth => {
      this.inhabilitado.getOneinhabilitado(auth.uid).subscribe(data=>{
        this.isInhabilitado=data;
        if(data=='true'){ //Si esta baneado
          console.log('data auth',data);
          this.router.navigate(['']);//mandalo a la bienbenida
        }
        else{ //si no esta baneado
          this.authService.isAuth().subscribe( auth => {
            this.admin.getOneAdmin(auth.uid).subscribe(data=>{
              this.isAdmin=data;
              if(data=='false'){ //no es admin
                this.router.navigate(['home']);//mandalo al home
              }
            })
          });
        }

      })
    });

      
         
       }));
   }

 }
