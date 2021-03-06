import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {Film} from '../film/film.model';


export class FilmService implements OnInit {
  // backURL = 'http://localhost';
  // backURL = 'http://vps352751.ovh.net';
  backURL = 'http://backend.local';
  computeURL = 'http://compute.local';
  films: Film[];
  nbFilms: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  getFilms(): Observable<any> {
    const tmp = this.fetchFilms();
    tmp.subscribe(films => this.films = films);
    return tmp;
  }

  reloadData() {
    this.fetchNbFilms().subscribe(n => this.nbFilms = n);
    this.getFilms().subscribe(films => this.films = films);
  }

  fetchNbFilms(): Observable<any> {
    return this.http.get(`${this.computeURL + '/stats'}`);
  }

  fetchFilms(): Observable<any> {
    return this.http.get(`${this.backURL + '/film'}`);
  }

  search(param: string): void {
    this.fetchSearch(param).subscribe(films => this.films = films);
  }

  fetchSearch(param: string): Observable<any> {
    return this.http.get(`${this.backURL + '/approxsearch?name=' + param}`);
  }
}
