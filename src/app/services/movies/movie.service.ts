import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponse } from './movies';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  httpClient = inject(HttpClient);

  getMovies(page = 1, limit = 20): Observable<MovieResponse> {
    return this.httpClient.get<MovieResponse>(
      `${import.meta.env.NG_API_BASE_URL}/api/movies`,
      { params: { page, limit } }
    );
  }
}