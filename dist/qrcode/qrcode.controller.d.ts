import { MysqlService } from 'src/mysqlservice/mysqlservice.service';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
export declare class QrcodeController {
    private readonly mysqlService;
    private jwtService;
    constructor(mysqlService: MysqlService, jwtService: JwtService);
    root(res: Response, params: any): Promise<string>;
    register(res: Response, session: Record<string, any>, body: any): Promise<void>;
}
