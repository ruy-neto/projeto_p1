import { Injectable } from '@nestjs/common';
import { PostgresService } from 'src/mysqlservice/mysqlservice.service';

@Injectable()
export class RegistryService {

    constructor(private readonly mysqlService: PostgresService) {}

    async getGuardRegistriesList(id: number): Promise<[any]> {
        return this.mysqlService.getGuardRegistriesList(id);
    }

    async getParentRegistriesList(id: number): Promise<[any]> {
        return this.mysqlService.getParentRegistriesList(id);
    }
}
