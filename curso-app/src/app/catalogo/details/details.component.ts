import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../../models/Books.model';
import { CatalogoService } from '../../services/catalogo.service';

@Component({
  selector: 'acc-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  oBook: Book;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private catalogo: CatalogoService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.oBook = this.catalogo.getBook(id);
  }

    gotoBooks() {
    this.router.navigateByUrl('/catalogo');
  }

}
