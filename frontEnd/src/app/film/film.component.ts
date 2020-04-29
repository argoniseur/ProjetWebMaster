import {Component, Input, OnInit} from '@angular/core';
import {Film} from './film.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Input() film: Film;

  constructor() {
  }

  ngOnInit(): void {
  }

}
