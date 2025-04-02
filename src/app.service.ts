import { Injectable } from '@nestjs/common';
import { PostgresService } from './mysqlservice/mysqlservice.service';

@Injectable()
export class AppService {
  constructor(private readonly mysqlService: PostgresService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async login(user: string): Promise<[any]> {
    return this.mysqlService.callLogin(user);
  }
}
