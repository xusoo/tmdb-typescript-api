import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Context } from '../context';
import { TvShowDetails } from '../model/tv-show-details';
export declare class TvApi {
    private context;
    constructor(context: Context);
    details(showId: number): Observable<TvShowDetails>;
}
