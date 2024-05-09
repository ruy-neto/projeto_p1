import { DatabaseConfig } from 'src/databaseconfig/database.config';
export declare class MysqlService {
    private readonly dbconfig;
    private pool;
    constructor(dbconfig: DatabaseConfig);
    query(sql: string, values?: any[]): Promise<any>;
    callCadastrarAdmin(procedureName: string, parameters: any[]): Promise<any>;
    callLogin(user: string): Promise<any>;
    callListParents(): Promise<any>;
    callAddUser(user: any): Promise<any>;
    callQRCodeChecker(qrcode: string): Promise<any>;
    hashPassword(password: string): Promise<string>;
    callQRCODERegister(id_guard: number, id_student: number, ischeckin: number): Promise<any>;
}
