import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Context } from '../context';
import { PersonDetails } from '../model/person-details';
export declare class PeopleApi {
    private context;
    constructor(context: Context);
    details(personId: number): Observable<PersonDetails>;
}
