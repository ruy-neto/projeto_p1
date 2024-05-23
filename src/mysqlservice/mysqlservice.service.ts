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

    async getGuardRegistriesList(id: number): Promise<any> {
      const connection = await this.pool.getConnection();
      try {
        return connection.query(`select studenttable.id,studenttable.name as studentName, time,ischeckin from record inner join USER as studenttable where studenttable.id = record.id_student and record.id_guard = ${id}`);
      } finally {
        connection.release();
      }
    }

    async getParentRegistriesList(id: number): Promise<any> {
      const connection = await this.pool.getConnection();
      try {
        return connection.query(`select studenttable.id as studentid,studenttable.name as studentName, time,ischeckin,guardtable.name as guardname, parenttable.id as parentid from record inner join USER as studenttable inner join USER as parenttable inner join USER as guardtable where studenttable.id = record.id_student and parenttable.id = studenttable.parent and record.id_guard = guardtable.id and parenttable.id = ${id}`);
      } finally {
        connection.release();
      }
    }

    async callAddUser(user:any): Promise<any> {
      const connection = await this.pool.getConnection();
      try {
        const password = await this.hashPassword(user.senha);
        const qrcode = user.rank == 1 ? Math.floor(Date.now() / 1000) : null;
        const parent = user.rank == 1 ? user.parent : null;
        const query = `insert into USER(user,password,name,phone,qrcode,rank,parent) values("${user.usuario}","${password}","${user.nome}","${user.telefone}",${qrcode},${user.rank},${parent})`;
        return connection.query(query);
      } 
      catch(e) {
        throw e;
      }
      finally {
        connection.release();
      }
    }

    async callQRCodeChecker(qrcode: string) : Promise<any>  {
      const connection = await this.pool.getConnection();
      const query = `select alunotable.id as studentid,alunotable.name as studentname, parent.name as parentname from USER alunotable inner join USER parent on parent.id = alunotable.parent where alunotable.qrcode = ${qrcode}`;
      return connection.query(query);
    }

    async hashPassword(password: string): Promise<string> {
      const saltRounds = 10;
      return bcrypt.hash(password, saltRounds);
    }

    async callQRCODERegister(id_guard:number,id_student:number,ischeckin:number): Promise<any>  {
      const connection = await this.pool.getConnection();
      const dataHoraAtual = new Date();
      // Obtém a data e hora atual no formato ISO 8601
      const isoString = dataHoraAtual.toISOString();

      // Remove os milissegundos da string ISO 86
      const query = `insert into record(id_guard,id_student,time,ischeckin) values(${id_guard},${id_student},"${isoString}",${ischeckin})`;
      console.log(query);
      return connection.query(query);
    }
}
