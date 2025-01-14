import { computed, inject, Injectable, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';
import { DataSet } from '../../models/common';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movies/movie.service';
import { movieConverter } from './home.convertor';

@Injectable({
  providedIn: 'root',
})
export class HomeServices {
  private readonly movieService = inject(MovieService);

  page = signal(1);
  limit = signal(20);

  moviesSignal = computed(() => ({
    page: this.page(),
    limit: this.limit(),
  }));

  movies$ = toObservable(this.moviesSignal).pipe(
    switchMap(({ page, limit }) =>
      this.movieService.getMovies(page, limit).pipe(
        map(
          ({ data, page, limit, total }) =>
            ({
              data: data.map((movie) => movieConverter(movie)) ?? [],
              pagination: {
                page,
                limit,
                total,
              },
            } as DataSet<Movie>)
        )
      )
    )
  );

  movies = toSignal(this.movies$, {
    initialValue: {
      data: [] as Movie[],
      pagination: { page: 1, limit: 10, total: 0 },
    },
  });
}
