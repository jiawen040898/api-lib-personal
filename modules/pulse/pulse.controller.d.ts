import { VersionDto } from './dto';
import { PulseService } from './pulse.service';
export declare class PulseController {
    private readonly pulseService;
    constructor(pulseService: PulseService);
    getPulse(): VersionDto;
}
