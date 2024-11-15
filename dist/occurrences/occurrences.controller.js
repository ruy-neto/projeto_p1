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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccurrencesController = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_guard_1 = require("../auth/auth.guard");
const MenuModel_1 = require("../models/MenuModel");
const mysqlservice_service_1 = require("../mysqlservice/mysqlservice.service");
const occurencie_1 = require("../occurencie");
const axios_1 = require("axios");
let OccurrencesController = class OccurrencesController {
    constructor(jwtService, mysqlService) {
        this.jwtService = jwtService;
        this.mysqlService = mysqlService;
    }
    root(session) {
        const sess = session;
        const bodySession = this.jwtService.decode(session.token);
        console.log("Corpo da sessão:", bodySession);
        return MenuModel_1.MenuModel.makeGuard(1, { guardid: bodySession.id });
    }
    async create(body, res) {
        try {
            console.log("1");
            const queryresult = await this.mysqlService.insertOccurence(body);
            const array = queryresult[0];
            if (array.length == 0) {
                console.log("2");
                res.status(common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                console.log("3");
                this.sendsms(body.name_student, body.type);
                res.status(common_1.HttpStatus.OK).json(queryresult.at(0));
            }
        }
        catch (error) {
            console.log("4");
            console.log(error);
        }
    }
    async sendsms(name, type) {
        try {
            const response = await axios_1.default.post('https://sms.comtele.com.br/api/v2/send', {
                Sender: 'sender_id',
                Receivers: '11981309580',
                Content: `TEG-INFORMA : Olá, caro(a) responsável da ${name}, tivemos uma ocorrência inesperada com um dos alunos. Razão: ${this.getEnumKeyByValue(Number(type))}`
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-key': 'f0817420-da4b-4c00-85df-6a210abd2b5f'
                }
            });
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    getEnumKeyByValue(value) {
        return occurencie_1.Tipo[value];
    }
};
exports.OccurrencesController = OccurrencesController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)("occurrences"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OccurrencesController.prototype, "root", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OccurrencesController.prototype, "create", null);
exports.OccurrencesController = OccurrencesController = __decorate([
    (0, common_1.Controller)('occurrences'),
    __metadata("design:paramtypes", [jwt_1.JwtService, mysqlservice_service_1.MysqlService])
], OccurrencesController);
//# sourceMappingURL=occurrences.controller.js.map