import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { genreType } from '../../../assets/content/movie.model';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  public moviesList = [];
  public generes;
  public genere;
  constructor(private router : Router, private _moviesService : MoviesService) { }

  ngOnInit() {
    //Get movie List
    this.moviesList =  this._moviesService.getMovies();
    //Get genere names and insert into select list
    this.generes = Object.keys(genreType);
  }

  //Navigate to movie by id
  onSelectMovie(movie){
    this.router.navigate(['/movie',movie.id]);
  }

}
