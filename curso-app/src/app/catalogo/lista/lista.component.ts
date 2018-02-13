import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/books.model';
import { CatalogoService } from '../../services/catalogo.service';

@Component({
  selector: 'acc-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  aBooks: Array<Book>;

  constructor(private catalogo: CatalogoService) { }

  ngOnInit() {
    this.aBooks = this.catalogo.getBooks();
  }

}
