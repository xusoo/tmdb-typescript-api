import { Observable } from 'rxjs';


import { Context } from '../context';
import { Helper } from '../helper';
import { PersonDetails } from '../model/person-details';

export class PeopleApi {

	constructor(private context: Context) {
	}

	details(personId: number): Observable<PersonDetails> {
		const url = `${this.context.baseUrl}/person/${personId}?api_key=${this.context.apiKey}&language=${this.context.language}`;
		return Helper.ajaxObservable(url);
	}

}