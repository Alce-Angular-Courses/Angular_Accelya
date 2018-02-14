import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { BooksService } from '../services/books.service';
import { LibrosMockComponent } from './libros-mock/libros-mock.component';
import { SharedModule } from '../shared/shared.module';
import { LibrosGoogleComponent } from './libros-google/libros-google.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleService } from '../services/google.service';
import { LibrosSrvComponent } from './libros-srv/libros-srv.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LibrosRoutingModule,
    SharedModule
  ],
  declarations: [
    LibrosComponent,
    LibrosMockComponent,
    LibrosGoogleComponent,
    LibrosSrvComponent],
  providers: [
    BooksService,
    GoogleService
  ]
})
export class LibrosModule { }
