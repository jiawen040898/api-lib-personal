import { ValueTransformer } from 'typeorm';
export declare class DecimalTransformer implements ValueTransformer {
    to(value: string | number): number | string;
    from(value: string): number | null;
}
