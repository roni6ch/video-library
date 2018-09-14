import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public movieObj;
  constructor(private router : Router,private route : ActivatedRoute, private _moviesService : MoviesService) {
    
    //Get id by user selection
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    //get Object by id 
    let findMovieObj = this._moviesService.getMovie(id);
    this.movieObj =  findMovieObj ? findMovieObj : this.goToPageNotFound();
    
   }

  ngOnInit() {
  }
  goToPageNotFound(){
    this.router.navigate(['/PageNotFound']);
  }
}
