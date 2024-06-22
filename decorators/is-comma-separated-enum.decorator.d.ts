import { ValidationOptions } from 'class-validator';
export declare const IsCommaSeparatedEnum: (enumType: unknown, validationOptions?: ValidationOptions) => (object: SafeAny, propertyName: string) => void;
