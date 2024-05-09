"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlService = void 0;
const common_1 = require("@nestjs/common");
const mysql = require("mysql2/promise");
const database_config_1 = require("../databaseconfig/database.config");
const bcrypt = require("bcrypt");
let MysqlService = class MysqlService {
    constructor(dbconfig) {
        this.dbconfig = dbconfig;
        this.pool = mysql.createPool({
            host: dbconfig.host,
            user: dbconfig.user,
            password: dbconfig.password,
            database: dbconfig.database,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }
    async query(sql, values) {
        const connection = await this.pool.getConnection();
        try {
            const [rows] = await connection.query(sql, values);
            return rows;
        }
        finally {
            connection.release();
        }
    }
    async callCadastrarAdmin(procedureName, parameters) {
        const connection = await this.pool.getConnection();
        try {
            return connection.query(`CALL ${procedureName}("${parameters[0]}","${parameters[1]}")`);
        }
        finally {
            connection.release();
        }
    }
    async callLogin(user) {
        const connection = await this.pool.getConnection();
        try {
            return connection.query(`CALL login("${user}")`);
        }
        finally {
            connection.release();
        }
    }
    async callListParents() {
        const connection = await this.pool.getConnection();
        try {
            return connection.query(`select id,name from USER where rank = 2`);
        }
        finally {
            connection.release();
        }
    }
    async callAddUser(user) {
        const connection = await this.pool.getConnection();
        try {
            const password = await this.hashPassword(user.senha);
            const qrcode = user.rank == 1 ? Math.floor(Date.now() / 1000) : null;
            const parent = user.rank == 1 ? user.parent : null;
            const query = `insert into USER(user,password,name,phone,qrcode,rank,parent) values("${user.usuario}","${password}","${user.nome}","${user.telefone}",${qrcode},${user.rank},${parent})`;
            return connection.query(query);
        }
        catch (e) {
            throw e;
        }
        finally {
            connection.release();
        }
    }
    async callQRCodeChecker(qrcode) {
        const connection = await this.pool.getConnection();
        const query = `select alunotable.id as studentid,alunotable.name as studentname, parent.name as parentname from USER alunotable inner join USER parent on parent.id = alunotable.parent where alunotable.qrcode = ${qrcode}`;
        return connection.query(query);
    }
    async hashPassword(password) {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }
    async callQRCODERegister(id_guard, id_student, ischeckin) {
        const connection = await this.pool.getConnection();
        const dataHoraAtual = new Date();
        const isoString = dataHoraAtual.toISOString();
        const query = `insert into record(id_guard,id_student,time,ischeckin) values(${id_guard},${id_student},"${isoString}",${ischeckin})`;
        console.log(query);
        return connection.query(query);
    }
};
exports.MysqlService = MysqlService;
exports.MysqlService = MysqlService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_config_1.DatabaseConfig])
], MysqlService);
//# sourceMappingURL=mysqlservice.service.js.map