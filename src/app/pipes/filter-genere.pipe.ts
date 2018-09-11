import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGenere'
})
export class FilterGenerePipe implements PipeTransform {

  transform(generes: any[], filter: Object): any {
    if (!generes || !filter || filter === "") {
      return generes;
    }
    return generes.filter(genere => {
      return genere.genres.indexOf(filter) !== -1});
  }

}
