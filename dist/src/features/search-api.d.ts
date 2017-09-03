import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/map';
import { SearchResult } from '../model/search-result';
import { Context } from '../context';
import { Movie } from '../model/movie';
import { Company } from '../model/company';
import { Collection } from '../model/collection';
import { Keyword } from '../model/keyword';
import { TvShow } from '../model/tv-show';
import { Person } from '../model/person';
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
