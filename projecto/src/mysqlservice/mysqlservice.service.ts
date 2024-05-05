import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';
import { DatabaseConfig } from 'src/databaseconfig/database.config';
import * as bcrypt from 'bcrypt';
@Injectable()
export class MysqlService {
    private pool: mysql.Pool;
    
    constructor(private readonly dbconfig: DatabaseConfig) {
        this.pool = mysql.createPool({
            host: dbconfig.host,
            user: dbconfig.user,
            password:  dbconfig.password,
            database: dbconfig.database,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
          });
    }

    async query(sql: string, values?: any[]): Promise<any> {
        const connection = await this.pool.getConnection();
        try {
          const [rows] = await connection.query(sql, values);
          return rows;
        } finally {
          connection.release();
        }
      }

    async callCadastrarAdmin(procedureName: string, parameters: any[]): Promise<any> {
      const connection = await this.pool.getConnection();
      try {
        return connection.query(`CALL ${procedureName}("${parameters[0]}","${parameters[1]}")`);
      } finally {
        connection.release();
      }
    }

    async callLogin(user: string): Promise<any> {
      const connection = await this.pool.getConnection();
      try {
        return connection.query(`CALL login("${user}")`);
      } finally {
        connection.release();
      }
    }

    async callListParents(): Promise<any> {
      const connection = await this.pool.getConnection();
      try {
        return connection.query(`select id,name from USER where rank = 2`);
      } finally {
        connection.release();
      }
    }

    async callAddUser(user:any): Promise<any> {
      const connection = await this.pool.getConnection();
      try {
        const password = await this.hashPassword(user.senha);
        const query = `insert into USER(user,password,name,phone,qrcode,rank,parent) values("${user.usuario}","${password}","${user.nome}","${user.telefone}",null,${user.rank},${user.responsavel == undefined ? null:`${user.responsavel}`})`;
        return connection.query(query);
      } 
      catch(e) {
        throw e;
      }
      finally {
        connection.release();
      }
    }

    async hashPassword(password: string): Promise<string> {
      const saltRounds = 10;
      return bcrypt.hash(password, saltRounds);
    }
}
