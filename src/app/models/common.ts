export interface Pagination {
  page: number;
  limit: number;
  total: number;
}

export interface DataSet<T> {
  data: T[];
  pagination: Pagination;
}
