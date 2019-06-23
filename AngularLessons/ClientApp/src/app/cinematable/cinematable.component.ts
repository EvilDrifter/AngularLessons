import { Component, OnInit } from '@angular/core';
import { CinemaFilm } from '../model/CinemaFilm';
import { Router } from '@angular/router';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-cinematable',
  templateUrl: './cinematable.component.html',
  styleUrls: ['./cinematable.component.css']
})
export class CinematableComponent implements OnInit {
  films: Array<CinemaFilm>;

  constructor(private router: Router, private service: CinemaService) {
    this.service.getAllItems().subscribe(result => {
      this.films = result;
    });
  }

  ngOnInit() {
  }

  addItem() {
    this.films.push(new CinemaFilm(this.films.length, "title6", "rating6", "description6"));
  }

  selectedItem(id: number) {
    console.log(id);
    this.router.navigate([`/film/${id}`]);
  }

}
