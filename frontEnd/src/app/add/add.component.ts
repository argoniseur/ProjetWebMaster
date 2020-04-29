import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Genre} from '../film/genre.model';
import {Film} from '../film/film.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  enumGenre: string[];
  film: Film = new Film();
  backURL = 'http://localhost:8080/film';

  @ViewChild('titre') nameInput: ElementRef;
  @ViewChild('annee') anneeInput: ElementRef;
  @ViewChild('realisateur') realisateurInput: ElementRef;
  @ViewChild('genre') genreInput: ElementRef;
  @ViewChild('emplacement') emplacementInput: ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.enumGenre = [];
    const tmp = Object.values(Genre);
    for (let i = 0; i < tmp.length / 2; i++) {
      this.enumGenre.push(tmp[i].toString());
    }
  }

  addFilm(film: Film): void {
    this.http.post<Film>(`${this.backURL}`, film).subscribe(f => {console.log(f); });
  }

  onClick(): void {
    this.film.id = 0;
    this.film.name = this.nameInput.nativeElement.value;
    this.film.annee = this.anneeInput.nativeElement.value;
    this.film.realisateur = this.realisateurInput.nativeElement.value;
    this.film.genre = this.genreInput.nativeElement.value;
    this.film.emplacement = this.emplacementInput.nativeElement.value;
    this.addFilm(this.film);
  }
}
