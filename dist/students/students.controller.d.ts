import { MysqlService } from 'src/mysqlservice/mysqlservice.service';
import { Response } from 'express';
export declare class StudentsController {
    private readonly mysqlService;
    constructor(mysqlService: MysqlService);
    getEstudantes(res: Response): Promise<void>;
}
