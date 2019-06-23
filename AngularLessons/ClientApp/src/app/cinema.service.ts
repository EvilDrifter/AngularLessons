import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CinemaFilm } from './model/CinemaFilm';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<CinemaFilm[]> {
    return this.http.get<Array<CinemaFilm>>('api/Cinema/getall');
  }
}
