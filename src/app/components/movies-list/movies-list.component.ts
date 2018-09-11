import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { genreType } from '../../../assets/content/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  public moviesList = [];
  public generes;
  public genere;
  constructor(private router : Router, private _moviesService : MoviesService) { }

  ngOnInit() {
    this.moviesList =  this._moviesService.getMovies();
    this.generes = Object.keys(genreType);

  }

  onSelectMovie(movie){
    this.router.navigate(['/movie',movie.id]);
  }

}
