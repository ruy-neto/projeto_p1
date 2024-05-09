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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastrarController = void 0;
const common_1 = require("@nestjs/common");
const cadastrar_adm_service_1 = require("./cadastrar-adm.service");
let CadastrarController = class CadastrarController {
    constructor(cadastrarADMService) {
        this.cadastrarADMService = cadastrarADMService;
    }
    async cadastrar(body) {
        if (body.user === '' || body.password === '') {
            return 'Algum campo está vazío';
        }
        await this.cadastrarADMService.cadastrarAdmin(body.user, body.password);
        return 'Solicitação POST recebida com sucesso!';
    }
    root(req) {
        return { pageTitle: 'Cadastrar' };
    }
};
exports.CadastrarController = CadastrarController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof common_1.Body !== "undefined" && common_1.Body) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], CadastrarController.prototype, "cadastrar", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('cadastrar'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Object)
], CadastrarController.prototype, "root", null);
exports.CadastrarController = CadastrarController = __decorate([
    (0, common_1.Controller)('cadastrar'),
    __metadata("design:paramtypes", [cadastrar_adm_service_1.CadastrarAdmService])
], CadastrarController);
//# sourceMappingURL=cadastrar.controller.js.map