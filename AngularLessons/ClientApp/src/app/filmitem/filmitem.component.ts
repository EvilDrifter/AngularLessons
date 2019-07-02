import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaFilm } from '../model/CinemaFilm';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-filmitem',
  templateUrl: './filmitem.component.html',
  styleUrls: ['./filmitem.component.css']
})
export class FilmitemComponent implements OnInit {
  cinemaId: number;
  film: CinemaFilm;

  constructor(private route: ActivatedRoute, private service: CinemaService) {
    this.cinemaId = +this.route.snapshot.paramMap.get('id');
    this.film = new CinemaFilm(0, "test", "item", "banan");
  }

  ngOnInit() {
    if (this.cinemaId > 0) {
      this.service.get(this.cinemaId).subscribe(result => {
        this.film = result;
        console.log(this.film);
      });
    }
  }

}
