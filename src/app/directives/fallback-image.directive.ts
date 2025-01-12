import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appFallbackImage]',
})
export class FallbackImageDirective {
  private readonly eRef = inject<ElementRef<HTMLImageElement>>(ElementRef);
  @Input() appImgFallback? = '';

  @HostListener('error')
  loadFallbackOnError() {
    this.eRef.nativeElement.src =
      this.appImgFallback || '/poster-placeholder.png';
  }
}
