import { DatabaseConfig } from 'src/databaseconfig/database.config';
export declare class PostgresService {
    private readonly dbconfig;
    private pool;
    constructor(dbconfig: DatabaseConfig);
    query(sql: string, values?: any[]): Promise<any>;
    callCadastrarAdmin(user: string, password: any[]): Promise<any>;
    callLogin(user: string): Promise<any>;
    callListParents(): Promise<any>;
    getGuardRegistriesList(id: number): Promise<any>;
    getParentRegistriesList(id: number): Promise<any>;
    callAddUser(user: any): Promise<any>;
    insertOccurence(body: any): Promise<any>;
    callGetAllStudents(): Promise<any>;
    callQRCodeChecker(qrcode: string): Promise<any>;
    hashPassword(password: string): Promise<string>;
    callQRCODERegister(id_guard: number, id_student: number, ischeckin: number): Promise<any>;
}
