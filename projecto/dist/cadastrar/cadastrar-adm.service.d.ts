import { MysqlService } from 'src/mysqlservice/mysqlservice.service';
export declare class CadastrarAdmService {
    private readonly mysqlService;
    constructor(mysqlService: MysqlService);
    cadastrarAdmin(user: string, password: string): Promise<any>;
    hashPassword(password: string): Promise<string>;
}
