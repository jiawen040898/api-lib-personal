import { ValidationOptions } from 'class-validator';
export declare const IsDateBefore: (comparePropertyName: string, validationOptions?: ValidationOptions) => (object: SafeAny, propertyName: string) => void;
