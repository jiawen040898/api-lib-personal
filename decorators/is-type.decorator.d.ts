import { ValidationOptions } from 'class-validator';
export declare const IsType: (types: Array<'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function'>, validationOptions?: ValidationOptions) => PropertyDecorator;
