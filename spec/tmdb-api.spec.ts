import {
	TmdbApi,
	SearchApi,
	MoviesApi,
	PeopleApi,
	CollectionsApi,
	TvApi,
} from '../src';

describe('basic usage', () => {

	const apiKey: string = window['__karma__'].config.apiKey;

	it('should instantiate correctly', () => {
		const api = new TmdbApi(apiKey, 'es');
		expect(api.context.apiKey).toEqual(apiKey);
		expect(api.context.language).toEqual('es');
		expect(api.search).toEqual(jasmine.any(SearchApi));
		expect(api.movies).toEqual(jasmine.any(MoviesApi));
		expect(api.collections).toEqual(jasmine.any(CollectionsApi));
		expect(api.people).toEqual(jasmine.any(PeopleApi));
		expect(api.tvshows).toEqual(jasmine.any(TvApi));
	});

});