import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import {  } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public movieId;
  public movieObj;
  constructor(private router : Router,private route : ActivatedRoute, private _moviesService : MoviesService) { }

  ngOnInit() {
    //Get id by user selection
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.movieId = id;
    //get Object by id 
    let findMovieObj = this._moviesService.getMovie(id);
    this.movieObj =  findMovieObj ? findMovieObj : this.goToPageNotFound();
    console.log(this.movieObj);
  }
  goToPageNotFound(){
    this.router.navigate(['/**']);
  }
}
