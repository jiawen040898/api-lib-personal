import { NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';
import { IBaseConfigs } from '../interfaces';
import { AwsCognitoService } from '../services';
export declare class BearerTokenMiddleware implements NestMiddleware {
    private readonly awsCognitoService;
    private readonly resourceVerifyOptions?;
    private readonly cognitoVerifyOptions?;
    private readonly enterpriseVerifyOptions?;
    private readonly defaultVerifyOptions?;
    constructor(awsCognitoService: AwsCognitoService, configService: ConfigService<IBaseConfigs, true>);
    use(req: Request, _res: Response, next: NextFunction): Promise<void>;
    private getUserInfo;
    private getAwsCognitoUserInfo;
}
