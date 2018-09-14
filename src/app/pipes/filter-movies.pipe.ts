import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterMovies'
})
export class FilterMoviesPipe implements PipeTransform {

    transform(movies : any[], filter : Object) : any {
        if(!movies || !filter) {
            return movies;
        }
        console.log(movies);
        return movies.filter(movie => movie.name.toLowerCase().indexOf(filter) !== -1);
    }

}
