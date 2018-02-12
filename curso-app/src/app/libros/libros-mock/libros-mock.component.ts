import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'acc-libros-mock',
  templateUrl: './libros-mock.component.html',
  styleUrls: ['./libros-mock.component.css']
})
export class LibrosMockComponent implements OnInit {

  clave: string;
  aLibros: Array<string>;

  constructor(public booksService: BooksService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    this.aLibros = this.booksService.getBooks(this.clave)
  }

}
