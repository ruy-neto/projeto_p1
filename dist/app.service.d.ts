import { PostgresService } from './mysqlservice/mysqlservice.service';
export declare class AppService {
    private readonly mysqlService;
    constructor(mysqlService: PostgresService);
    getHello(): string;
    login(user: string): Promise<[any]>;
}
