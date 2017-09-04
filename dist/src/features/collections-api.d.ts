import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Context } from '../context';
import { CollectionDetails } from '../model/collection-details';
export declare class CollectionsApi {
    private context;
    constructor(context: Context);
    details(collectionId: number): Observable<CollectionDetails>;
}
