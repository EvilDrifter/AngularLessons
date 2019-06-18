import { Component, OnInit } from '@angular/core';
import { CinemaFilm } from '../model/CinemaFilm';

@Component({
  selector: 'app-cinematable',
  templateUrl: './cinematable.component.html',
  styleUrls: ['./cinematable.component.css']
})
export class CinematableComponent implements OnInit {

  films: Array<CinemaFilm>;

  constructor() {
    this.films = new Array<CinemaFilm>();

    this.films.push(new CinemaFilm(1, "title1", "rating1", "description1"));
    this.films.push(new CinemaFilm(2, "title2", "rating2", "description2"));
    this.films.push(new CinemaFilm(3, "title3", "rating3", "description3"));
    this.films.push(new CinemaFilm(4, "title4", "rating4", "description4"));
    this.films.push(new CinemaFilm(5, "title5", "rating5", "description5"));
  }

  ngOnInit() {
  }

}
