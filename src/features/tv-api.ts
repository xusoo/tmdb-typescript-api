import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Context } from '../context';
import { Helper } from '../helper';
import { TvShowDetails } from '../model/tv-show-details';

export class TvApi {

	constructor(private context: Context) {
	}

	details(showId: number): Observable<TvShowDetails> {
		const url = `${this.context.baseUrl}/tv/${showId}?api_key=${this.context.apiKey}&language=${this.context.language}`;
		return Helper.ajaxObservable(url);
	}

}