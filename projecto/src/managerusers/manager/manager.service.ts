import { Injectable } from '@nestjs/common';
import { MysqlService } from 'src/mysqlservice/mysqlservice.service';

@Injectable()
export class ManagerService {
    constructor(private readonly mysqlService: MysqlService) {}
    async login(user: string): Promise<[any]> {
      return this.mysqlService.callLogin(user);
    }

    async listParents(): Promise<[any]> {
        return this.mysqlService.callListParents();
    }
}