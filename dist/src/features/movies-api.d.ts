import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Context } from '../context';
import { MovieDetails } from '../model/movie-details';
export declare class MoviesApi {
    private context;
    constructor(context: Context);
    details(movieId: number): Observable<MovieDetails>;
}
