import { from } from 'rxjs';

import {
    TmdbApi,
    Helper,
    TvShowDetails
} from '../../src';

describe('tv feature', () => {

	const api = new TmdbApi(window['__karma__'].config.apiKey);

	it('should fetch tv show details', (done) => {

		if (!api.context.apiKey) {
			window['spyOn'](Helper, 'ajaxObservable').and.callFake((url) => from([window['fixture'].load('lost-tvshow-details-response.json')]));
		}

		api.tvshows.details(4607).subscribe((tvshow: TvShowDetails) => {

			expect(<any>tvshow.id).toEqual(4607);
			expect(tvshow.name).toEqual('Lost');
			expect(tvshow.original_name).toEqual('Lost');
			expect(tvshow.original_language).toEqual('en');
			expect(tvshow.languages).toEqual(['en']);
			expect(tvshow.origin_country).toEqual(['US']);

			expect(<any>tvshow.first_air_date).toEqual('2004-09-22');
			expect(<any>tvshow.last_air_date).toEqual('2010-05-23');

			expect(<any>tvshow.genres[0]).toEqual({id: 10759, name: 'Action & Adventure'});
			expect(<any>tvshow.genres[1]).toEqual({id: 18, name: 'Drama'});
			expect(<any>tvshow.genres[2]).toEqual({id: 9648, name: 'Mystery'});

			expect(<any>tvshow.created_by[0].id).toEqual(1237491);
			expect(<any>tvshow.created_by[1].id).toEqual(15344);

			expect(<any>tvshow.networks[0]).toEqual({id: 2, name: 'American Broadcasting Company'});
			expect(<any>tvshow.production_companies[0]).toEqual({name: 'Bad Robot', id: 11461});
			expect(<any>tvshow.production_companies[1]).toEqual({name: 'ABC Studios', id: 19366});

			expect(tvshow.episode_run_time).toEqual([45, 42]);
			expect(<any>tvshow.number_of_episodes).toEqual(120);
			expect(<any>tvshow.number_of_seasons).toEqual(6);
			expect(<any>tvshow.seasons.length).toEqual(7); // Has a season 0
			expect(<any>tvshow.seasons[0].episode_count).toEqual(29);
			expect(<any>tvshow.seasons[0].air_date).toEqual('2005-04-27');

			expect(tvshow.status).toEqual('Ended');
			expect(tvshow.type).toEqual('Scripted');

			expect(tvshow.popularity).toBeDefined();
			expect(tvshow.backdrop_path).toBeDefined();
			expect(tvshow.poster_path).toBeDefined();
			expect(tvshow.overview).toBeDefined();
			expect(tvshow.vote_average).toBeDefined();
			expect(tvshow.vote_count).toBeDefined();
			expect(tvshow.homepage).toBeDefined();

			expect(tvshow.in_production).toBeFalsy();

			done();
		});
	});

});