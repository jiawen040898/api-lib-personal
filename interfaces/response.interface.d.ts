export interface Meta {
    type: string;
    message: unknown;
    error_details?: unknown;
}
export interface IResponse<T> {
    data: T | null;
    meta?: Meta | null;
}
export declare class APIResponse<T> implements IResponse<T> {
    data: T | null;
    meta?: Meta | null;
    constructor({ data, meta, }: {
        data: T | null;
        meta?: Meta | null;
    });
}
