export class CinemaFilm {
  id: number;
  title: string;
  rating: string;
  description: string;

  constructor(_id: number, _title: string, _rating: string, _description: string) {
    this.id = _id;
    this.title = _title;
    this.rating = _rating;
    this.description = _description;
  }
}
