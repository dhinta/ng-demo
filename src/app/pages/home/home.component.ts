import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-home',
  imports: [MovieListComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  httpClient = inject(HttpClient);

  movies$ = this.httpClient

    .get<Movie[]>(`${import.meta.env.NG_API_BASE_URL}/api/movies`)
    .pipe(map((movies) => movies));

  moviesSignal = toSignal(this.movies$, {
    initialValue: [] as Movie[],
  });
}
