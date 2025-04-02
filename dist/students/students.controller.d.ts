import { PostgresService } from 'src/mysqlservice/mysqlservice.service';
import { Response } from 'express';
export declare class StudentsController {
    private readonly mysqlService;
    constructor(mysqlService: PostgresService);
    getEstudantes(res: Response): Promise<void>;
}
