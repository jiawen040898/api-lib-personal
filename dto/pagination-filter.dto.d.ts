export declare class PaginationFilterDto {
    page?: number;
    page_size?: number;
    constructor(page?: number, pageSize?: number);
    get getLimit(): number;
    get getOffset(): number;
}
