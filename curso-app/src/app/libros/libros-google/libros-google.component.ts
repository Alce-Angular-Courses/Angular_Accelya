import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_LIBROS } from '../../../environments/environment';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/foreach';

@Component({
  selector: 'acc-libros-google',
  templateUrl: './libros-google.component.html',
  styleUrls: ['./libros-google.component.css']
})
export class LibrosGoogleComponent implements OnInit {

  clave: string;
  aLibros: Array<string>;
  url: string;


  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.aLibros = [];
    this.url = API_LIBROS;
  }

  buscar() {
    this.aLibros = [];
    // this.aLibros = this.booksService.getBooks(this.clave);
    this.http.get(this.url + this.clave)
    .subscribe(
      (response: any) => {
        response = response.items;
        response.forEach(element => {
          this.aLibros.push(element.volumeInfo.title);
        });
        console.log(response);
      },
      (error) => { console.log(error); }
    );
    this.clave = '';
  }


  buscarRx() {
    this.aLibros = [];
    this.http.get(this.url + this.clave)
    .map( (response: any) => response.items)
    .subscribe(
      (response: any) =>
        response.forEach( element => {this.aLibros.push(element.volumeInfo.title); } ),
      (error) => { console.log(error);}
    );
    this.clave = '';
  }

  /* buscarAsinc() {
    this.booksService.getBooksAsync(this.clave)
    .then(
      (response: any) => {this.aLibros = response; }
    );
    this.clave = '';
  }*/
}
