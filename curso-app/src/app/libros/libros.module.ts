import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { BooksService } from '../services/books.service';
import { LibrosMockComponent } from './libros-mock/libros-mock.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LibrosRoutingModule,
    SharedModule
  ],
  declarations: [
    LibrosComponent, 
    LibrosMockComponent],
  providers: [
    BooksService
  ]
})
export class LibrosModule { }
