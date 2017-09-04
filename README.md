This project is a wrapper of the TMDB's v3 API, made with Typescript and RxJS.

## Installation

`npm install --save tmdb-typescript-api`

## Features

Implemented features so far are:
- Search
  - Movies
  - Shows
  - People
  - Collections
  - Companies
  - Keywords
- Movies
  - Details
- TV
  - Details
- People
  - Details
- Collections
  - Details

(PR are welcome, complete list: https://developers.themoviedb.org/3/)

## Usage

```typescript
let api: TmdbApi = new TmdbApi('<API_KEY>');

api.search.movies('Pulp Fiction').subscribe(movies => {
    let movie = movies.results[0];
    console.log(`"Pulp Fiction" was released in ${movie.release_date}`);
});

api.tvshows.details(4607).subscribe(show => {
    console.log(`"Lost" had ${show.number_of_seasons} seasons`);
});
```

Every resultant object is an exact copy of the JSON obtained from the original API, so for further documentation: https://developers.themoviedb.org/3/getting-started

## Test

`npm run test`

This will trigger an offline testing using mock JSON fixtures. If you want to try calls against the actual API, you just need to pass the API key as well:

`npm run test -- --api-key=<API_KEY>`

(You also can use `karma start`)


## Build

`npm run build`

(Or `rollup -c`)
