import { DataSource, DataSourceOptions } from 'typeorm';
export declare const dataSourceFactory: (options?: DataSourceOptions) => Promise<DataSource>;
