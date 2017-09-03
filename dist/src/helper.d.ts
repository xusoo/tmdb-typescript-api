import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/from';
export declare class Helper {
    static ajaxObservable(url: any): Observable<any>;
}
