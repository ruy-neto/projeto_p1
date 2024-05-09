import { MysqlService } from './mysqlservice/mysqlservice.service';
export declare class AppService {
    private readonly mysqlService;
    constructor(mysqlService: MysqlService);
    getHello(): string;
    login(user: string): Promise<[any]>;
}
