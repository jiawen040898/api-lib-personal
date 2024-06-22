import { ValidationErrors, ValidationItemsErrors } from '../validators';
export type ErrorDetails = {
    error_codes: string[];
    [key: string]: SafeAny;
} | ValidationErrors | ValidationItemsErrors;
