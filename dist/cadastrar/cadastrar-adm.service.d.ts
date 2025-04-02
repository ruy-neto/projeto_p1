import { PostgresService } from 'src/mysqlservice/mysqlservice.service';
export declare class CadastrarAdmService {
    private readonly mysqlService;
    constructor(mysqlService: PostgresService);
    cadastrarAdmin(user: string, password: string): Promise<any>;
    hashPassword(password: string): Promise<string>;
}
