import { Injectable } from '@nestjs/common';
import { MysqlService } from './mysqlservice/mysqlservice.service';

@Injectable()
export class AppService {
  constructor(private readonly mysqlService: MysqlService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async login(user: string): Promise<[any]> {
    return this.mysqlService.callLogin(user);
  }
}
