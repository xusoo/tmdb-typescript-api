import { from } from "rxjs";

import {
    Helper,
    MovieDetails,
    TmdbApi,
} from "../../src";

describe("movies feature", () => {

    const api = new TmdbApi(window["__karma__"].config.apiKey);

    it("should fetch movie details", (done) => {

        if (!api.context.apiKey) {
            spyOn(Helper, "ajaxObservable").and.callFake(
                (url) => from([window["fixture"].load("insideout-movie-details-response.json")]),
            );
        }

        api.movies.details(150540).subscribe((movie: MovieDetails) => {
            expect(movie.id as any).toEqual(150540);
            expect(movie.title).toEqual("Inside Out");
            expect(movie.original_title).toEqual("Inside Out");
            expect(movie.release_date as any).toEqual("2015-06-09");
            expect(movie.original_language).toEqual("en");
            expect(movie.homepage).toEqual("http://movies.disney.com/inside-out");
            expect(movie.imdb_id).toEqual("tt2096673");

            expect(movie.genres[0] as any).toEqual({id: 18, name: "Drama"});
            expect(movie.genres[1] as any).toEqual({id: 35, name: "Comedy"});
            expect(movie.genres[2] as any).toEqual({id: 16, name: "Animation"});
            expect(movie.genres[3] as any).toEqual({id: 10751, name: "Family"});

            expect(movie.production_companies[0] as any).toEqual(    {
                    "id": 3,
                    "logo_path": "/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png",
                    "name": "Pixar",
                    "origin_country": "US"
                }
            );

            expect(movie.production_countries[0] as any).toEqual({iso_3166_1: "US", name: "United States of America"});

            expect(movie.spoken_languages[0] as any).toEqual({iso_639_1: "en", name: "English"});

            expect(movie.popularity).toBeDefined();
            expect(movie.backdrop_path).toBeDefined();
            expect(movie.poster_path).toBeDefined();
            expect(movie.overview).toBeDefined();
            expect(movie.vote_average).toBeDefined();
            expect(movie.vote_count).toBeDefined();
            expect(movie.video).toBeFalsy();
            expect(movie.adult).toBeFalsy();
            expect(movie.belongs_to_collection).toBeDefined();
            expect(movie.budget).toBeDefined();
            expect(movie.revenue).toBeDefined();
            expect(movie.runtime).toBeDefined();
            expect(movie.status).toBeDefined();
            expect(movie.tagline).toBeDefined();

            done();
        });
    });

});
