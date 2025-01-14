import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';
import { Pagination } from '../../models/common';

@Component({
  selector: 'app-pagination',
  imports: [
    CommonModule,
    LucideAngularModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;

  readonly pagination = input<Pagination>({ page: 1, limit: 10, total: 0 });
  readonly pageChange = output<number>();
  readonly limitChange = output<number>();

  data = computed(() => ({
    page: this.pagination()?.page,
    limit: this.pagination()?.limit,
    totalPages: Math.ceil(
      (this.pagination()?.total ?? 0) / (this.pagination()?.limit ?? 1)
    ),
  }));

  prevPage(page: number): void {
    this.pageChange.emit(page - 1);
  }

  nextPage(page: number): void {
    this.pageChange.emit(page + 1);
  }

  onPageSizeChange(selectChangeEvent: MatSelectChange): void {
    this.limitChange.emit(Number(selectChangeEvent.value));
  }
}
