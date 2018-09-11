import {NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes : Routes = [
    {path : '' , redirectTo: '/movies-list' , pathMatch : 'full'},
    {path : 'movies-list' , component: MoviesListComponent},
    {path : 'movie/:id' , component: MovieComponent},
    {path : '**'  , component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [MoviesListComponent,MovieComponent,PageNotFoundComponent];