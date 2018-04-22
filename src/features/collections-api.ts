import { Observable } from 'rxjs';

import { Context } from '../context';
import { Helper } from '../helper';
import { CollectionDetails } from '..';

export class CollectionsApi {

	constructor(private context: Context) {
	}

	details(collectionId: number): Observable<CollectionDetails> {
		const url = `${this.context.baseUrl}/collection/${collectionId}?api_key=${this.context.apiKey}&language=${this.context.language}`;
		return Helper.ajaxObservable(url);
	}

}