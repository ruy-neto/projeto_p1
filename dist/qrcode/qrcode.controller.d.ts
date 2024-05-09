import { MysqlService } from 'src/mysqlservice/mysqlservice.service';
import { Response } from 'express';
export declare class QrcodeController {
    private readonly mysqlService;
    constructor(mysqlService: MysqlService);
    root(res: Response, params: any): Promise<string>;
    register(res: Response, body: any): Promise<void>;
}
