import { Injectable } from '@nestjs/common';
import { PostgresService } from 'src/mysqlservice/mysqlservice.service';

@Injectable()
export class ManagerService {
    constructor(private readonly mysqlService: PostgresService) {}
    async addUser(user: any): Promise<[any]> {
      return this.mysqlService.callAddUser(user);
    }

    async listParents(): Promise<[any]> {
        return this.mysqlService.callListParents();
    }
}