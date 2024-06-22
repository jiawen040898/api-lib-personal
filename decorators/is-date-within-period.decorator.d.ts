import { ValidationOptions } from 'class-validator';
export declare const IsDateWithinPeriod: (startingDaysFromNow?: number, endingDaysFromNow?: number, validationOptions?: ValidationOptions) => (object: SafeAny, propertyName: string) => void;
