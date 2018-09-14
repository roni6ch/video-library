import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {Router} from '@angular/router';
import {genreType} from '../../../assets/content/movie.model';

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

    public moviesList;
    public generes;
    public genere;
    public order;
    public orderList;
    constructor(private router : Router, private _moviesService : MoviesService) {}

    ngOnInit() {
        //Get movie List
        this._moviesService.getMovies().subscribe(data => this.moviesList = data);
        //Get genere names and insert into select list
        this.genere = "";
        this.generes = Object.keys(genreType);
        this.order = '';
        this.orderList  = ['rate','name','length'];
    }
    orderByFunc(order){
        this.order = order;
    }
    //Navigate to movie by id
    onSelectMovie(movie) {
        this.router.navigate(['/movie', movie.id]);
    }

}
