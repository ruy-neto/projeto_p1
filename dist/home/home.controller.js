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
exports.HomeController = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_guard_1 = require("../auth/auth.guard");
const MenuModel_1 = require("../models/MenuModel");
let HomeController = class HomeController {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    root(res, session) {
        const sess = session;
        const bodySessionBody = this.jwtService.decode(session.token);
        console.log("cheguei ate aqui com ranking" + bodySessionBody.rank);
        switch (bodySessionBody.rank) {
            default:
                return res.redirect('/');
            case 2:
                return MenuModel_1.MenuModel.makeParent(0, null);
            case 3:
                return MenuModel_1.MenuModel.makeGuard(0, null);
            case 4:
                return MenuModel_1.MenuModel.makeAdmin(0, null);
        }
    }
};
exports.HomeController = HomeController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('home'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "root", null);
exports.HomeController = HomeController = __decorate([
    (0, common_1.Controller)('home'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], HomeController);
//# sourceMappingURL=home.controller.js.map