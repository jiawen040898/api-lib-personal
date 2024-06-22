import { BadRequestException } from '@nestjs/common';
import { ErrorDetails } from '../interfaces';
export declare class BaseBadRequestException extends BadRequestException {
    constructor(message: string, errorDetails: ErrorDetails);
}
