import { from } from 'rxjs';

import {
	TmdbApi,
	Helper,
	PersonDetails
} from '../../src';

describe('people feature', () => {

	const api = new TmdbApi(window['__karma__'].config.apiKey);

	it('should fetch person details', (done) => {

		if (!api.context.apiKey) {
			window['spyOn'](Helper, 'ajaxObservable').and.callFake((url) => from([window['fixture'].load('tarantino-people-details-response.json')]));
		}

		api.people.details(138).subscribe((person: PersonDetails) => {
			expect(<any>person.id).toEqual(138);
			expect(person.name).toEqual('Quentin Tarantino');
			expect(person.also_known_as[0]).toEqual('Quentin Jerome Tarantino');
			expect(<any>person.birthday).toEqual('1963-03-27');
			expect(<any>person.deathday).toBeNull(); //Fortunately
			expect(<any>person.gender).toEqual(2);
			expect(person.popularity).toBeDefined();
			expect(person.profile_path).toBeDefined();
			expect(person.biography).toBeDefined();
			expect(person.homepage).toBeDefined();
			expect(person.imdb_id).toBeDefined();
			expect(person.place_of_birth).toBeDefined();
			expect(person.adult).toBeFalsy();

			done();
		});
	});

});