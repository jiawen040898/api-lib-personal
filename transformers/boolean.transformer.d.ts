import { ValueTransformer } from 'typeorm';
export declare class BooleanTransformer implements ValueTransformer {
    to(value: boolean | null): number | null;
    from(value: number): boolean | null;
}
