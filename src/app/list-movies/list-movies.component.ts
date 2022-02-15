import { Component, OnInit, VERSION } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css'],
})
export class ListMoviesComponent implements OnInit {
  movieList = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieList = this.movieService.getMovies();
    console.log(this.movieList);
  }
}
