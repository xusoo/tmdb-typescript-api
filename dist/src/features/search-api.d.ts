import { Observable } from 'rxjs';
import { Context } from '../context';
import { SearchResult, Movie, Company, Collection, Keyword, TvShow, Person } from '../';
export declare class SearchApi {
    private context;
    constructor(context: Context);
    private url(resource, query, page);
    collections(query: string, page?: number): Observable<SearchResult<Collection>>;
    companies(query: string, page?: number): Observable<SearchResult<Company>>;
    keywords(query: string, page?: number): Observable<SearchResult<Keyword>>;
    movies(query: string, page?: number): Observable<SearchResult<Movie>>;
    multi(query: string, page?: number): Observable<SearchResult<Movie | TvShow | Person>>;
    people(query: string, page?: number): Observable<SearchResult<Person>>;
    tvshows(query: string, page?: number): Observable<SearchResult<TvShow>>;
}
