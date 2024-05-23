import { MysqlService } from 'src/mysqlservice/mysqlservice.service';
export declare class RegistryService {
    private readonly mysqlService;
    constructor(mysqlService: MysqlService);
    getGuardRegistriesList(id: number): Promise<[any]>;
    getParentRegistriesList(id: number): Promise<[any]>;
}
