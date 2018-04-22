import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { ajax } from 'rxjs/ajax';

export class Helper {
	/**
	 * @param url 
	 */
	public static ajaxObservable(url): Observable<any> {
		return ajax({
			url: url,
			crossDomain: true
		}).pipe(
			map(ajax => {
				return ajax.response;
			})
		)
	}
}