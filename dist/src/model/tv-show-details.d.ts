import { TvShow } from './tv-show';
import { Person } from './person';
import { Genre } from './genre';
import { Network } from './network';
import { Company } from './company';
import { Season } from './season';
export declare class TvShowDetails extends TvShow {
    created_by: Person[];
    episode_run_time: number[];
    genres: Genre[];
    homepage: string;
    in_production: boolean;
    languages: string[];
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    production_companies: Company[];
    seasons: Season[];
    status: string;
    type: string;
    last_air_date: Date;
}
