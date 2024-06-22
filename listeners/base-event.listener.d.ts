import { PinoLogger } from 'nestjs-pino';
export declare class BaseEventsListener {
    private readonly serviceName;
    protected readonly logger: PinoLogger;
    constructor(serviceName: string, logger: PinoLogger);
    protected safeInvokeActions<T extends readonly unknown[] | []>(promises: T): Promise<void>;
}
