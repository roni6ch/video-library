import { IMovie } from './../interfaces/IMovie';
import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { movies } from '../../assets/content/movie.mock-data';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { 
    console.log(movies);
  }

  getMovies(): Observable<IMovie[]>{
    return of(<IMovie[]>movies);
  }

  getMovie(id){
    return movies.find(function(movie) {
      return movie.id === id;
    });
  }
}
