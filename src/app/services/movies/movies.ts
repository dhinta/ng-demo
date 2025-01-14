interface Imdb {
  rating: number;
  votes: number;
}

interface RottenTomatoes {
  viewer: {
    rating: number;
    numReviews: number;
    meter: number;
  };
}

export interface MovieResponseData {
  _id: string;
  title: string;
  plot: string;
  languages: string[];
  poster: string;
  released: Date;
  genres: string[];
  cast: string[];
  directors: string[];
  writers: string[];
  runtime: number;
  num_mflix_comments: number;
  fullplot: string;
  countries: string[];
  imdb: Imdb;
  type: string;
  tomatoes: RottenTomatoes;
}

export interface MovieResponse {
  page: number;
  limit: number;
  total: number;
  data: MovieResponseData[];
}
