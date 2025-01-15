import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { MovieService } from '../../services/movies/movie.service';
import { movieConverter } from '../home/home.convertor';

@Injectable()
export class MovieDetailsService {
  private readonly service = inject(MovieService);
  private readonly route = inject(ActivatedRoute);

  private readonly movie$ = this.route.params.pipe(
    map((params) => params['movieId']),
    switchMap((movieId) => this.service.getMovie(movieId)),
    map((movie) => movieConverter(movie))
  );

  readonly movie = toSignal(this.movie$, {
    initialValue: null,
  });
}
