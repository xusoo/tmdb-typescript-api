import { SearchApi } from './features/search-api';
import { Context } from './context';
import { MoviesApi } from './features/movies-api';
import { CollectionsApi } from './features/collections-api';
import { PeopleApi } from './features/people-api';
import { TvApi } from './features/tv-api';
export declare class TmdbApi {
    context: Context;
    private _search;
    private _movies;
    private _collections;
    private _people;
    private _tvshows;
    constructor(apiKey: string, language?: string);
    readonly search: SearchApi;
    readonly movies: MoviesApi;
    readonly collections: CollectionsApi;
    readonly people: PeopleApi;
    readonly tvshows: TvApi;
}
