import { PostgresService } from 'src/mysqlservice/mysqlservice.service';
export declare class RegistryService {
    private readonly mysqlService;
    constructor(mysqlService: PostgresService);
    getGuardRegistriesList(id: number): Promise<[any]>;
    getParentRegistriesList(id: number): Promise<[any]>;
}
