import { from } from 'rxjs';

import {
    TmdbApi,
	Helper,
    Movie,
    Company,
    Collection,
    Keyword,
    Person,
    TvShow,
    SearchResult,
} from '../../src';

describe('search feature', () => {

	const api = new TmdbApi(window['__karma__'].config.apiKey);

	const mockData = typeof api.context.apiKey === 'undefined';

	/**
	 * In case we are not using an API Key, we can fake our data and load some JSON responses.
	 * @param fileLoader function which has to return the path to the JSON file
	 */
	function spyAjaxCall(fileLoader: Function) {
		if (mockData) {
			window['spyOn'](Helper, 'ajaxObservable').and.callFake((url) => {
				return from([window['fixture'].load(fileLoader.call(this, url))]);
			});
		}
	}

	it('should find collections', (done) => {

		spyAjaxCall(() => 'batman-collections-response.json');

		api.search.collections('batman').subscribe((search: SearchResult<Collection>) => {
			expect(<any>search.page).toEqual(1);

			if (mockData) {
				/* We only can assure this if we are reading the JSON data, because the API results may vary */
				expect(<any>search.total_pages).toEqual(1);
				expect(<any>search.total_results).toEqual(7);
				expect(<any>search.results.length).toEqual(7);
			}

			const collection = search.results.find(result => result.id === 263);
			expect(<any>collection.id).toEqual(263);
			expect(collection.name).toEqual('The Dark Knight Collection');
			expect(collection.poster_path).toBeDefined();
			expect(collection.backdrop_path).toBeDefined();

			done();
		});

	});

	it('should find companies', (done) => {

		spyAjaxCall(() => 'fox-companies-response-page-1.json');

		api.search.companies('fox').subscribe((search: SearchResult<Company>) => {
			expect(<any>search.page).toEqual(1);

			if (mockData) {
				expect(<any>search.total_pages).toEqual(2);
				expect(<any>search.total_results).toEqual(106);
				expect(<any>search.results.length).toEqual(20);
			}

			const company = search.results.find(result => result.id === 5924);
			expect(<any>company.id).toEqual(5924);
			expect(company.name).toEqual('Fox');
			expect(company.logo_path).toBeNull();

			done();
		});
	});

	it('should find keywords', (done) => {

		spyAjaxCall(() => 'computer-keywords-response.json');

		api.search.keywords('computer').subscribe((search: SearchResult<Keyword>) => {
			expect(<any>search.page).toEqual(1);

			if (mockData) {
				expect(<any>search.total_pages).toEqual(2);
				expect(<any>search.total_results).toEqual(37);
				expect(<any>search.results.length).toEqual(20);
			}

			const keyword = search.results.find(result => result.id === 6104);
			expect(<any>keyword.id).toEqual(6104);
			expect(keyword.name).toEqual('computer');

			done();
		});
	});

	it('should find movies', (done) => {

		spyAjaxCall(() => 'insideout-movies-response.json');

		api.search.movies('inside out').subscribe((search: SearchResult<Movie>) => {
			expect(<any>search.page).toEqual(1);

			if (mockData) {
				expect(<any>search.total_pages).toEqual(3);
				expect(<any>search.total_results).toEqual(42);
				expect(<any>search.results.length).toEqual(20);
			}

			const movie = search.results.find(result => result.id === 150540);
			expect(<any>movie.id).toEqual(150540);
			expect(movie.title).toEqual('Inside Out');
			expect(movie.original_title).toEqual('Inside Out');
			expect(<any>movie.release_date).toEqual('2015-06-09');
			expect(movie.original_language).toEqual('en');
			expect(movie.genre_ids).toBeDefined();
			expect(movie.popularity).toBeDefined();
			expect(movie.backdrop_path).toBeDefined();
			expect(movie.poster_path).toBeDefined();
			expect(movie.overview).toBeDefined();
			expect(movie.vote_average).toBeDefined();
			expect(movie.vote_count).toBeDefined();
			expect(movie.video).toBeFalsy();
			expect(movie.adult).toBeFalsy();

			done();
		});
	});

	it('should find people', (done) => {

		spyAjaxCall(() => 'tarantino-people-response.json');

		api.search.people('tarantino').subscribe((search: SearchResult<Person>) => {
			expect(<any>search.page).toEqual(1);

			if (mockData) {
				expect(<any>search.total_pages).toEqual(1);
				expect(<any>search.total_results).toEqual(8);
				expect(<any>search.results.length).toEqual(8);
			}

			const person = search.results.find(result => result.id === 138);
			expect(<any>person.id).toEqual(138);
			expect(person.name).toEqual('Quentin Tarantino');
			expect(person.popularity).toBeDefined();
			expect(person.known_for).toBeDefined();
			expect(person.profile_path).toBeDefined();
			expect(person.adult).toBeFalsy();

			done();
		});
	});

	it('should find tv shows', (done) => {

		spyAjaxCall(() => 'lost-tvshows-response.json');

		api.search.tvshows('lost').subscribe((search: SearchResult<TvShow>) => {
			expect(<any>search.page).toEqual(1);

			if (mockData) {
				expect(<any>search.total_pages).toEqual(7);
				expect(<any>search.total_results).toEqual(135);
				expect(<any>search.results.length).toEqual(20);
			}

			const tvshow = search.results.find(result => result.id === 4607);
			expect(<any>tvshow.id).toEqual(4607);
			expect(tvshow.name).toEqual('Lost');
			expect(tvshow.original_name).toEqual('Lost');
			expect(<any>tvshow.first_air_date).toEqual('2004-09-22');
			expect(tvshow.original_language).toEqual('en');
			expect(tvshow.origin_country).toEqual(['US']);
			expect(tvshow.genre_ids).toBeDefined();
			expect(tvshow.popularity).toBeDefined();
			expect(tvshow.backdrop_path).toBeDefined();
			expect(tvshow.poster_path).toBeDefined();
			expect(tvshow.overview).toBeDefined();
			expect(tvshow.vote_average).toBeDefined();
			expect(tvshow.vote_count).toBeDefined();

			done();
		});
	});

	it('should find movies, tv shows and people', (done) => {

		spyAjaxCall(() => 'john-multi-response.json');

		api.search.multi('john').subscribe((search: SearchResult<Movie | TvShow | Person>) => {
			expect(<any>search.page).toEqual(1);

			if (mockData) {
				expect(<any>search.total_pages).toEqual(720);
				expect(<any>search.total_results).toEqual(14400);
				expect(<any>search.results.length).toEqual(20);
			}

			search.results.forEach((item: Movie | TvShow | Person) => {
				expect(item['media_type']).toMatch(/movie|tv|person/);
			});

			done();
		});
	});

	it('should paginate search results', (done) => {

		spyAjaxCall((url) => {
			return`fox-companies-response-page-${url.match(/&page=(\d+)/)[1]}.json`;
		});

		(function makeCall(page) {
			api.search.companies('fox', page).subscribe((search: SearchResult<any>) => {
				expect(search.page).toEqual(page);

				if (mockData) {
					expect(<any>search.total_pages).toEqual(2);
					expect(<any>search.total_results).toEqual(106);
				}

				expect(search.results.length).toBeGreaterThan(1);
				expect(search.results.length).toBeLessThanOrEqual(20);

				if (page < search.total_pages) {
					makeCall(page + 1);
				} else {
					expect(page).toEqual(search.total_pages);
					done();
				}
			});
		})(1);
	});

});