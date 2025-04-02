import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class DatabaseConfig {
  constructor(private configService: ConfigService) {
    this.host = configService.get<string>('host');
    this.database = configService.get<string>('database');
    this.user = configService.get<string>('user');
    this.password = configService.get<string>('password');
  }
  public host: string;
  public database: string;
  public user: string;
  public password: string;
}