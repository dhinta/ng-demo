import { Movie } from '../../models/movie';
import { MovieResponseData } from '../../services/movies/movies';

export function movieConverter(movie: MovieResponseData): Movie {
  return {
    _id: movie._id ?? '',
    title: movie.title ?? '',
    poster: movie.poster ?? '',
    released: movie.released ?? null,
    plot: movie.plot ?? '',
    fullplot: movie.fullplot ?? '',
    imdb: movie.imdb ?? {},
    genres: movie.genres ?? [],
    runtime: movie.runtime ?? 0,
    languages: movie.languages ?? [],
    countries: movie.countries ?? [],
    tomatoes: movie.tomatoes ?? {},
    directors: movie.directors ?? [],
    writers: movie.writers ?? [],
    cast: movie.cast ?? [],
    type: movie.type ?? '',
    num_mflix_comments: movie.num_mflix_comments ?? 0,
  };
}
