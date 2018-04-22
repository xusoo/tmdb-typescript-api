import { from } from 'rxjs';

import {
	TmdbApi,
	Helper,
	CollectionDetails
} from '../../src';

describe('collections feature', () => {

	const api = new TmdbApi(window['__karma__'].config.apiKey);

	it('should fetch collection details', (done) => {

		if (!api.context.apiKey) {
			window['spyOn'](Helper, 'ajaxObservable').and.callFake((url) => from([window['fixture'].load('batman-collection-details-response.json')]));
		}

		api.collections.details(263).subscribe((collection: CollectionDetails) => {
			expect(<any>collection.id).toEqual(263);
			expect(collection.name).toEqual('The Dark Knight Collection');
			expect(collection.poster_path).toBeDefined();
			expect(collection.backdrop_path).toBeDefined();
			expect(collection.overview).toBeDefined();

			expect(collection.parts[0].title).toEqual('The Dark Knight');
			expect(<any>collection.parts[0].release_date).toEqual('2008-07-16');
			expect(collection.parts[1].title).toEqual('The Dark Knight Rises');
			expect(<any>collection.parts[1].release_date).toEqual('2012-07-16');
			expect(collection.parts[2].title).toEqual('Batman Begins');
			expect(<any>collection.parts[2].release_date).toEqual('2005-06-10');

			done();
		});
	});

});