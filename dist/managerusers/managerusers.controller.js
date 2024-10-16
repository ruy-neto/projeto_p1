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
exports.ManagerusersController = void 0;
const common_1 = require("@nestjs/common");
const admin_only_guard_1 = require("../admin-only/admin-only.guard");
const MenuModel_1 = require("../models/MenuModel");
const manager_service_1 = require("./manager/manager.service");
let ManagerusersController = class ManagerusersController {
    constructor(managerService) {
        this.managerService = managerService;
    }
    async root(res) {
        try {
            const listParents = await this.managerService.listParents();
            return MenuModel_1.MenuModel.makeAdmin(1, { listParents: listParents[0] });
        }
        catch (error) {
            return { error };
        }
    }
    async create(res, session, body) {
        try {
            await this.managerService.addUser(body);
            res.redirect("home");
        }
        catch (error) {
            return `Error ${error}`;
        }
    }
};
exports.ManagerusersController = ManagerusersController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)("managerusers"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ManagerusersController.prototype, "root", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Session)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ManagerusersController.prototype, "create", null);
exports.ManagerusersController = ManagerusersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)(admin_only_guard_1.AdminOnlyGuard),
    __metadata("design:paramtypes", [manager_service_1.ManagerService])
], ManagerusersController);
//# sourceMappingURL=managerusers.controller.js.map