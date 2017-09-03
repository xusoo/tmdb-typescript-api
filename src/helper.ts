import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/from';

export class Helper {

	/**
	 * Returns an Observable from an AJAX call
	 * @param url
	 * @returns {Observable}
	 */
	public static ajaxObservable(url) {
		return Observable.ajax({
			url: url,
			crossDomain: true
		}).map(ajax => {
			return ajax.response;
		});
	}

}