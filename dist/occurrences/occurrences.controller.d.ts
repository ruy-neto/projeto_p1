import { JwtService } from '@nestjs/jwt';
import { MenuModel } from 'src/models/MenuModel';
import { MysqlService } from 'src/mysqlservice/mysqlservice.service';
import { Response } from 'express';
export declare class OccurrencesController {
    jwtService: JwtService;
    private readonly mysqlService;
    constructor(jwtService: JwtService, mysqlService: MysqlService);
    root(session: Record<string, any>): MenuModel;
    create(body: any, res: Response): Promise<void>;
    sendsms(name: string, type: string): Promise<any>;
    getEnumKeyByValue(value: number): string | undefined;
}
