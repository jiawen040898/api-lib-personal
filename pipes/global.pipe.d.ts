import { PipeTransform } from '@nestjs/common';
import { ClassTransformOptions } from 'class-transformer';
export declare const globalPipes: (classTransformOptions?: ClassTransformOptions) => PipeTransform[];
