import { Observable } from 'rxjs';
import { Context } from '../context';
import { CollectionDetails } from '..';
export declare class CollectionsApi {
    private context;
    constructor(context: Context);
    details(collectionId: number): Observable<CollectionDetails>;
}
