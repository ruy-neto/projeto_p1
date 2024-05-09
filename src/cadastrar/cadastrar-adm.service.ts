import { Injectable } from '@nestjs/common';
import { MysqlService } from 'src/mysqlservice/mysqlservice.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CadastrarAdmService {
    constructor(private readonly mysqlService: MysqlService) {}
    async cadastrarAdmin(user: string, password: string): Promise<any> {
        const haspass = await this.hashPassword(password);
        return this.mysqlService.callCadastrarAdmin("inserir_admin",[user,haspass]);
    }
    
    async hashPassword(password: string): Promise<string> {
      const saltRounds = 10;
      return bcrypt.hash(password, saltRounds);
    }
}
