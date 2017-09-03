import { Collection } from './collection';
import { Movie } from './movie';
export class CollectionDetails extends Collection {
	overview: string;
	parts: Movie[];
}