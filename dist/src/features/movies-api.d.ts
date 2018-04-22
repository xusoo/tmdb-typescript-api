import { Observable } from 'rxjs';
import { Context } from '../context';
import { MovieDetails } from '..';
export declare class MoviesApi {
    private context;
    constructor(context: Context);
    details(movieId: number): Observable<MovieDetails>;
}
