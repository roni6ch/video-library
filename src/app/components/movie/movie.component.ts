import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movieId;
  public movieObj;
  constructor(private route : ActivatedRoute, private _moviesService : MoviesService) { }

  ngOnInit() {
    //Get id by user selection
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.movieId = id;
    //get Object by id 
    this.movieObj =  this._moviesService.getMovie(id);
    console.log(this.movieObj);
  }

}
