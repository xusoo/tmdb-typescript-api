import { Observable } from 'rxjs';
import { Context } from '../context';
import { PersonDetails } from '../model/person-details';
export declare class PeopleApi {
    private context;
    constructor(context: Context);
    details(personId: number): Observable<PersonDetails>;
}
