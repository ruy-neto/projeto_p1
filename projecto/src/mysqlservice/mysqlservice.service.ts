import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';
import { DatabaseConfig } from 'src/databaseconfig/database.config';

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
}
