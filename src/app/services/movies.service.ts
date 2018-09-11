import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from '../interfaces/IMovie';
import { Observable } from 'rxjs';
import { movies } from '../../assets/content/movie.mock-data';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
private _url = "../assets/content/movie.mock-data.ts";

  constructor(private http: HttpClient) { 
    console.log(movies);
  }

  getMovies(){
     return movies;
  }

  getMovie(id){
    return movies.find(function(movie) {
      return movie.id === id;
    });
  }
}
