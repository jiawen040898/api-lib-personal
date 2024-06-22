import { RequestMethod } from '@nestjs/common';
import { RouteInfo } from '@nestjs/common/interfaces';
export declare const routeUtil: {
    buildRouteInfos: (paths: string[], method?: RequestMethod) => RouteInfo[];
};
