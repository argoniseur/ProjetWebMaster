import {Component, OnDestroy, OnInit} from '@angular/core';
import {Film} from '../film/film.model';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {filter, takeUntil} from 'rxjs/operators';
import {FilmService} from '../service/film.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit, OnDestroy {
  film: Film;
  public destroyed = new Subject<any>();
  constructor(private http: HttpClient, private router: Router, public filmService: FilmService) { }

  ngOnInit(): void {
    this.http.get<any>(`${this.filmService.backURL + '/random'}`).subscribe(film => this.film = film);
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd),
      takeUntil(this.destroyed)
    ).subscribe(() => {
      this.http.get<any>(`${this.filmService.backURL + '/random'}`).subscribe(film => this.film = film);
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
