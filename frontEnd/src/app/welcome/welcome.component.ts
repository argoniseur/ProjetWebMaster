import {Component, OnInit} from '@angular/core';
import {FilmService} from '../service/film.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public filmService: FilmService) { }

  ngOnInit() {
    this.filmService.reloadData();
  }

}


