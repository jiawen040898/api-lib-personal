import { BaseBadRequestException } from '../exceptions';
export type ValidationErrors = {
    error_codes: string[];
};
export type ValidationItemsErrors = {
    [key: string]: {
        error_codes: string[];
    };
};
export declare abstract class BaseValidator<T extends ValidationItemsErrors | ValidationErrors> {
    protected readonly errors: T;
    protected readonly errorMessage: string;
    constructor(errors: T, errorMessage?: string);
    get hasError(): boolean;
    getErrors(): T;
    throwExceptionIfAnyError(): void;
    abstract validate(): this;
}
export declare class ValidationFailedException extends BaseBadRequestException {
}
