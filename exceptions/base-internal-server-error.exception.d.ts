import { InternalServerErrorException } from '@nestjs/common';
import { ErrorDetails } from '../interfaces';
export declare class BaseInternalServerErrorException extends InternalServerErrorException {
    constructor(message: string, error: Error, errorDetails: ErrorDetails);
    static parseError(error: Error): SafeAny;
}
