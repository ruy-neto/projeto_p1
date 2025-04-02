import { Module } from '@nestjs/common';
import { DatabaseConfig } from 'src/databaseconfig/database.config';
import { PostgresService } from 'src/mysqlservice/mysqlservice.service';
import { CadastrarAdmService } from './cadastrar-adm.service';
import { CadastrarController } from './cadastrar.controller';

@Module({
  controllers: [CadastrarController],
  providers: [PostgresService,CadastrarAdmService,DatabaseConfig]
})
export class CadastrarModule {}
