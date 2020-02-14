import { PaginationComponent } from 'ngx-bootstrap';

export interface Pagination {
currentPage:number;
    itemsPerPage: number;
    totalItems: number;
    totalPage: number;
}
export class PaginationResult<T>{
    result:T;
    pagination:Pagination;
}
