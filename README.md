_tmdb-typescript-api_ is a wrapper of the TMDB's API v3, made with Typescript.

## Installation

`npm i -S tmdb-typescript-api`

## Features

Implemented features so far are:
- Search (movies, shows, people, collections, companies and keywords)
- Movies
- TV
- People
- Collections

## Usage

```typescript
let api: TmdbApi = new TmdbApi('<API_KEY>');
api.search.movies('Pulp Fiction').subscribe((movies) => {
    let movie = movies.results[0];
    console.log(`Pulp Fiction was released in ${movie.release_date}`);
});

```

Every result has the exact same property names as the original API: https://developers.themoviedb.org/3/getting-started

## Test

`npm run test`

This will trigger an offline testing using mock JSON fixtures. If you want to try calls against the actual API, you just need to pass the API key as well:

`npm run test -- --api-key=<API_KEY>`

(you also can use `karma start`)


## Build

Using Rollup.js

`npm run build`

(you also can use `rollup -c`)