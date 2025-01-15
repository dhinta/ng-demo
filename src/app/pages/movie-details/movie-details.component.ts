import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CircleUserRound, LucideAngularModule } from 'lucide-angular';
import { MovieDetailsService } from './movie-details.service';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
  providers: [MovieDetailsService],
})
export class MovieDetailsComponent {
  private readonly service = inject(MovieDetailsService);
  readonly CircleUserRound = CircleUserRound;

  movie = this.service.movie;

  // vm$ = combineLatest([this.movieId$]).pipe(
  //   map(([movieId]) => ({ movieId })),
  //   tap(console.log)
  // );
}
