import { PostgresService } from 'src/mysqlservice/mysqlservice.service';
export declare class ManagerService {
    private readonly mysqlService;
    constructor(mysqlService: PostgresService);
    addUser(user: any): Promise<[any]>;
    listParents(): Promise<[any]>;
}
