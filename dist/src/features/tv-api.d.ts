import { Observable } from 'rxjs';
import { Context } from '../context';
import { TvShowDetails } from '..';
export declare class TvApi {
    private context;
    constructor(context: Context);
    details(showId: number): Observable<TvShowDetails>;
}
