import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  private readonly route = inject(ActivatedRoute);

  movieId$: Observable<string> = this.route.params.pipe(
    map((params) => params['movieId'])
  );

  vm$ = combineLatest([this.movieId$]).pipe(map(([movieId]) => ({ movieId })));
}
