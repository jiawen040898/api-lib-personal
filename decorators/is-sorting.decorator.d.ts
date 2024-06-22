import { ValidationOptions } from 'class-validator';
export declare const IsSorting: (sortableFields?: string[], validationOptions?: ValidationOptions) => (object: SafeAny, propertyName: string) => void;
