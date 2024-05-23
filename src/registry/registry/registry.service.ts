import { Injectable } from '@nestjs/common';
import { MysqlService } from 'src/mysqlservice/mysqlservice.service';

@Injectable()
export class RegistryService {

    constructor(private readonly mysqlService: MysqlService) {}

    async getGuardRegistriesList(id: number): Promise<[any]> {
        return this.mysqlService.getGuardRegistriesList(id);
    }

    async getParentRegistriesList(id: number): Promise<[any]> {
        return this.mysqlService.getParentRegistriesList(id);
    }
}
