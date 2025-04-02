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
exports.PostgresService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
const database_config_1 = require("../databaseconfig/database.config");
const bcrypt = require("bcrypt");
let PostgresService = class PostgresService {
    constructor(dbconfig) {
        this.dbconfig = dbconfig;
        this.pool = new pg_1.Pool({
            host: dbconfig.host,
            user: dbconfig.user,
            password: dbconfig.password,
            database: dbconfig.database,
            port: 5432,
            ssl: {
                rejectUnauthorized: false,
            },
        });
    }
    async query(sql, values) {
        const client = await this.pool.connect();
        try {
            const res = await client.query(sql, values);
            return res.rows;
        }
        finally {
            client.release();
        }
    }
    async callCadastrarAdmin(user, password) {
        return this.query('CALL inserir_admin($1, $2)', [user, password]);
    }
    async callLogin(user) {
        return this.query('SELECT * FROM login($1)', [user]);
    }
    async callListParents() {
        return this.query('SELECT id, name FROM "USER" WHERE rank = 2');
    }
    async getGuardRegistriesList(id) {
        const sql = `
      SELECT studenttable.id, studenttable.name AS studentName, time, ischeckin
      FROM record
      INNER JOIN "USER" studenttable ON studenttable.id = record.id_student
      WHERE record.id_guard = $1`;
        return this.query(sql, [id]);
    }
    async getParentRegistriesList(id) {
        const sql = `
      SELECT studenttable.id AS studentid, studenttable.name AS studentName, time, ischeckin,
             guardtable.name AS guardname, parenttable.id AS parentid
      FROM record
      INNER JOIN "USER" studenttable ON studenttable.id = record.id_student
      INNER JOIN "USER" parenttable ON parenttable.id = studenttable.parent
      INNER JOIN "USER" guardtable ON guardtable.id = record.id_guard
      WHERE parenttable.id = $1`;
        return this.query(sql, [id]);
    }
    async callAddUser(user) {
        const password = await this.hashPassword(user.senha);
        const qrcode = user.rank == 1 ? Math.floor(Date.now() / 1000) : null;
        const parent = user.rank == 1 ? user.parent : null;
        const sql = `
      INSERT INTO "USER"("user", password, name, phone, qrcode, rank, parent)
      VALUES ($1, $2, $3, $4, $5, $6, $7)`;
        return this.query(sql, [user.usuario, password, user.nome, user.telefone, qrcode, user.rank, parent]);
    }
    async insertOccurence(body) {
        const sql = `
      INSERT INTO occurrences (id_student, date, description, observation, type)
      VALUES ($1, $2, $3, $4, $5)`;
        return this.query(sql, [body.id_student, body.date, body.description, body.observation, body.type]);
    }
    async callGetAllStudents() {
        return this.query('SELECT id, name FROM "USER" WHERE rank = 1');
    }
    async callQRCodeChecker(qrcode) {
        const sql = `
      SELECT alunotable.id AS studentid, alunotable.name AS studentname, parent.name AS parentname
      FROM "USER" alunotable
      INNER JOIN "USER" parent ON parent.id = alunotable.parent
      WHERE alunotable.qrcode = $1`;
        return this.query(sql, [qrcode]);
    }
    async hashPassword(password) {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }
    async callQRCODERegister(id_guard, id_student, ischeckin) {
        const isoString = new Date().toISOString();
        const sql = `
      INSERT INTO record(id_guard, id_student, time, ischeckin)
      VALUES ($1, $2, $3, $4)`;
        return this.query(sql, [id_guard, id_student, isoString, ischeckin]);
    }
};
exports.PostgresService = PostgresService;
exports.PostgresService = PostgresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_config_1.DatabaseConfig])
], PostgresService);
//# sourceMappingURL=mysqlservice.service.js.map