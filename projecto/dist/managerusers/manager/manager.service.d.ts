import { MysqlService } from 'src/mysqlservice/mysqlservice.service';
export declare class ManagerService {
    private readonly mysqlService;
    constructor(mysqlService: MysqlService);
    addUser(user: any): Promise<[any]>;
    listParents(): Promise<[any]>;
}
