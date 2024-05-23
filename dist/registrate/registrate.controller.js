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
exports.RegistrateController = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_guard_1 = require("../auth/auth.guard");
const MenuModel_1 = require("../models/MenuModel");
let RegistrateController = class RegistrateController {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    root(session) {
        const sess = session;
        const bodySession = this.jwtService.decode(session.token);
        console.log("Corpo da sessão:", bodySession);
        return MenuModel_1.MenuModel.makeGuard(1, { guardid: bodySession.id });
    }
    sucesso() {
    }
};
exports.RegistrateController = RegistrateController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)("registrate"),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RegistrateController.prototype, "root", null);
__decorate([
    (0, common_1.Get)("success"),
    (0, common_1.Render)('qrcodesuccess'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegistrateController.prototype, "sucesso", null);
exports.RegistrateController = RegistrateController = __decorate([
    (0, common_1.Controller)('registrate'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], RegistrateController);
//# sourceMappingURL=registrate.controller.js.map