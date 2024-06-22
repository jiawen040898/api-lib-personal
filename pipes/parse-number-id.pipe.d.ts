import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ParseNumberIdPipe implements PipeTransform {
    transform(value: number, metadata: ArgumentMetadata): number;
}
