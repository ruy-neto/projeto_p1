import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseConfig {
  public host: string = 'mysql.projetop1tag.kinghost.net';
  public user: string = 'projetop1tag';
  public password: string = 'qHDKj0bHNor3LrB';
  public database: string = 'projetop1tag';
}
