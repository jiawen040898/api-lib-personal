import { AuditDataEntity } from '../models';
export declare class AuditDataDto {
    created_at?: Date;
    created_by?: number;
    updated_at?: Date;
    updated_by?: number;
    constructor(dto: AuditDataEntity);
}
