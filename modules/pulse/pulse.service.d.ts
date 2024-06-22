import { ConfigService } from '@nestjs/config';
import { IBaseConfigs } from '../../interfaces';
import { VersionDto } from './dto';
export declare class PulseService {
    private configService;
    constructor(configService: ConfigService<IBaseConfigs, true>);
    getPulse(): VersionDto;
}
