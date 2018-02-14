import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../../services/google.service';

@Component({
  selector: 'acc-libros-srv',
  templateUrl: './libros-srv.component.html',
  styleUrls: ['./libros-srv.component.css']
})
export class LibrosSrvComponent implements OnInit {
  clave: string;
  aLibros: Array<string>;

  constructor(public google: GoogleService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    this.google.getLibros$(this.clave)
    .subscribe(
      (response: any) => this.aLibros = response,
      (error) => { console.log(error); }
    );
    this.clave = '';
  }

}
