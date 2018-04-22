import { Movie } from './movie';
import { TvShow } from './tv-show';
export declare class Person {
    id: number;
    name: string;
    profile_path: string;
    adult: boolean;
    popularity: number;
    known_for: Array<Movie | TvShow>;
}
