import { Component, computed, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FallbackImageDirective } from '../../../directives/fallback-image.directive';
import { Movie } from '../../../models/movie';

@Component({
  selector: 'app-card',
  imports: [RouterModule, FallbackImageDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  readonly movie = input<Movie>();
  data = computed(() => ({
    id: this.movie()?._id,
    title: this.movie()?.title,
    poster: this.movie()?.poster,
    released: this.movie()?.released,
    plot: this.movie()?.plot,
    fullplot: this.movie()?.plot,
    imdb: this.movie()?.imdb,
    genres: this.movie()?.genres,
    runtime: this.movie()?.runtime,
  }));
}
