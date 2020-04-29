import {Component, OnInit} from '@angular/core';
import {FilmService} from './service/film.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public filmService: FilmService) {
  }

  ngOnInit(): void {
  }

  onClickSearch(param: string) {
    this.filmService.search(param);
  }

}
