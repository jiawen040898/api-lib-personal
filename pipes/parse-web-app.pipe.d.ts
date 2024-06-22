import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ParseWebAppPipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata): string;
}
