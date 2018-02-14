import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LibrosGoogleComponent } from './libros-google.component';
import { BooksService } from '../../services/books.service';

describe('LibrosGoogleComponent', () => {
  let component: LibrosGoogleComponent;
  let fixture: ComponentFixture<LibrosGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosGoogleComponent ],
      imports: [FormsModule],
      providers: [BooksService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
