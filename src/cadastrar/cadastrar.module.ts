import { Module } from '@nestjs/common';
import { DatabaseConfig } from 'src/databaseconfig/database.config';
import { MysqlService } from 'src/mysqlservice/mysqlservice.service';
import { CadastrarAdmService } from './cadastrar-adm.service';
import { CadastrarController } from './cadastrar.controller';

@Module({
  controllers: [CadastrarController],
  providers: [MysqlService,CadastrarAdmService,DatabaseConfig]
})
export class CadastrarModule {}
