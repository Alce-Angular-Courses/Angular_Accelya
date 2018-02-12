import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


  const LIBROS: Array<string> = [
    'Aprende Angular 2 en 2 días',
    'Angular 2 para torpes',
    'Angular 2 para expertos'
  ]

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(title: string) {
    return LIBROS;
  }

  getBooksAsync(clave: string) {
    return new Promise(
      (resolve, reject) => {
      setTimeout(
        () => { resolve(LIBROS); }, 2000
        );
      }
    );
  }

  getBookcRx(clave: string) {
    return new Observable(
      (observer) => {
        setTimeout(() => {
        observer.next(LIBROS);
        }, 2000);
      }
  );
}

}
