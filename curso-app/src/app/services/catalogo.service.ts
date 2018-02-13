import { Injectable } from '@angular/core';
import { BookModel } from '../models/Books.model';
import { BOOKS } from '../models/Books.data';

@Injectable()
export class CatalogoService {

  private aBooks: Array<BookModel>;

  constructor() {
    this.aBooks = BOOKS;
  }

  getBooks() {
    return this.aBooks;
  }

  getBook(id: number | string) {
    return this.aBooks.find(book => book.id === +id);
  }

}
