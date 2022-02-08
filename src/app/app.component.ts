import { Component, VERSION } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movie-list';

  movieList = [];

  constructor(private myMovieService: MovieService) {}

  ngOnInit() {
    this.movieList = this.myMovieService.getMovies();
    console.log(this.movieList);
  }
}
