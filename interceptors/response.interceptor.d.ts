import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces';
export declare class ResponseInterceptor<T> implements NestInterceptor<T, IResponse<T>> {
    intercept(_context: ExecutionContext, next: CallHandler): Observable<IResponse<T>>;
    private transformResponse;
}
