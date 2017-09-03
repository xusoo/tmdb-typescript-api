import { SearchApi } from './features/search-api';
import { Context } from './context';
import { MoviesApi } from './features/movies-api';
import { CollectionsApi } from './features/collections-api';
import { PeopleApi } from './features/people-api';
import { TvApi } from './features/tv-api';

export class TmdbApi {

	context: Context;

	private _search: SearchApi;
	private _movies: MoviesApi;
	private _collections: CollectionsApi;
	private _people: PeopleApi;
	private _tvshows: TvApi;

	constructor(apiKey: string, language = 'en') {
		this.context = new Context();
		this.context.apiKey = apiKey;
		this.context.language = language;
	}

	get search() {
		return this._search || (this._search = new SearchApi(this.context));
	}

	get movies() {
		return this._movies || (this._movies = new MoviesApi(this.context));
	}

	get collections() {
		return this._collections || (this._collections = new CollectionsApi(this.context));
	}

	get people() {
		return this._people || (this._people = new PeopleApi(this.context));
	}

	get tvshows() {
		return this._tvshows || (this._tvshows = new TvApi(this.context));
	}

}
