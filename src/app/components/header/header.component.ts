import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FileVideo2, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly Logo = FileVideo2;
}
