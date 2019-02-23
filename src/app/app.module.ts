import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProductosService} from './services/productos.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { ListBooksComponent } from './components/admin/list-books/list-books.component';
import { Page404Component } from './components/page404/page404.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { FooterComponent } from './components/footer/footer.component';
import { MainNavigationComponent } from './navigations/main-navigation/main-navigation.component';
import { AdminNavigationComponent } from './navigations/admin-navigation/admin-navigation.component';
import { AdminComponent } from './views/admin/admin.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ListadeseoComponent } from './components/listadeseo/listadeseo.component'; 

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    HeroComponent,
    HomeComponent,
    OffersComponent,
    DetailsBookComponent,
    ListBooksComponent,
    Page404Component,
    FooterComponent,
    MainNavigationComponent,
    AdminNavigationComponent,
    AdminComponent,
    AdminSidebarComponent,
    CarritoComponent,
    ListadeseoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,  
  ],
  providers: [
    AngularFireAuth,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
