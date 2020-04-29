import {Component, OnInit, ViewChild} from '@angular/core';
import {FilmService} from '../service/film.service';
import {Film} from '../film/film.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  filmsFound: Film[];
  confirmationDelete = false;
  filmToDelete: Film;
  backURL = 'http://localhost:8080';
  constructor(public filmService: FilmService, private http: HttpClient) { }

  ngOnInit(): void {
    this.filmsFound = [];
  }

  onClickSearch(param: string) {
    this.filmService.fetchSearch(param).subscribe(film => this.filmsFound = film);
  }

  isEmpty() {
    return this.filmsFound.length === 0;
  }

  onClickDelete(film: Film) {
    this.confirmationDelete = true;
    this.filmToDelete = film;
  }

  onClickConfirm() {
    this.confirmationDelete = false;
    const tmp = this.filmsFound;
    this.filmsFound = [];
    tmp.forEach(f => {if (f !== this.filmToDelete) { this.filmsFound.push(f); }});
    this.http.get(`${this.backURL + '/deletebyid?id=' + this.filmToDelete.id}`).subscribe(r => console.log(r));

  }
}
