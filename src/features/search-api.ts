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
import { Helper } from '../helper';

export class SearchApi {

	constructor(private context: Context) {
	}

	/**
	 * Builds the endpoint URL depending on which resource we are looking for
	 * @param resource company, collection, keyword, movie, tv, person...
	 * @param query
	 * @returns {string}
	 */
	private url(resource: string, query: string, page: number) {
		return `${this.context.baseUrl}/search/${resource}?api_key=${this.context.apiKey}&language=${this.context.language}&query=${query}&page=${page}`;
	}

	collections(query: string, page = 1): Observable<SearchResult<Collection>> {
		return Helper.ajaxObservable(this.url('collection', query, page));
	}

	companies(query: string, page = 1): Observable<SearchResult<Company>> {
		return Helper.ajaxObservable(this.url('company', query, page));
	}

	keywords(query: string, page = 1): Observable<SearchResult<Keyword>> {
		return Helper.ajaxObservable(this.url('keyword', query, page));
	}

	movies(query: string, page = 1): Observable<SearchResult<Movie>> {
		return Helper.ajaxObservable(this.url('movie', query, page));
	}

	multi(query: string, page = 1): Observable<SearchResult<Movie | TvShow | Person>> {
		return Helper.ajaxObservable(this.url('multi', query, page));
	}

	people(query: string, page = 1): Observable<SearchResult<Person>> {
		return Helper.ajaxObservable(this.url('person', query, page));
	}

	tvshows(query: string, page = 1): Observable<SearchResult<TvShow>> {
		return Helper.ajaxObservable(this.url('tv', query, page));
	}

}