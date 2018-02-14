import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_LIBROS } from '../../environments/environment';

@Injectable()
export class GoogleService {

  url: string;
  aLibros: Array<any>;

  constructor(public http: HttpClient) { 
    this.url =  API_LIBROS;
    this.aLibros = [];
  }

  getLibros$ (clave) {
    return this.http.get(this.url + clave)
    .map( (response: any) => this.extractTitles(response));
  }

  private extractTitles(response: any) {
    if (response.items) {
      return response.items.map(book => book.volumeInfo.title);
    } else {
    return response;
    }
  }
}






