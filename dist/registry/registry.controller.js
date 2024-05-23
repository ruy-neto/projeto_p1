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
exports.RegistryController = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_guard_1 = require("../auth/auth.guard");
const MenuModel_1 = require("../models/MenuModel");
const registry_service_1 = require("./registry/registry.service");
let RegistryController = class RegistryController {
    constructor(jwtService, registryService) {
        this.jwtService = jwtService;
        this.registryService = registryService;
    }
    async root(session) {
        const sess = session;
        const bodySessionBody = this.jwtService.decode(session.token);
        switch (bodySessionBody.rank) {
            default:
            case 2:
                console.log("It is a Tuesday.");
                break;
            case 3:
                const id = bodySessionBody.id;
                const tuple = await this.registryService.getGuardRegistriesList(id);
                const list = tuple[0];
                console.log("Guarda Lista:", list);
                const treatedList = list.map(element => {
                    var data = new Date(element.time);
                    var hora = data.getUTCHours();
                    var minuto = data.getUTCMinutes();
                    var dia = data.getUTCDate();
                    var mes = data.getUTCMonth() + 1;
                    var ano = data.getUTCFullYear();
                    var dataFormatada = hora + ":" + minuto + " do dia " + dia + "/" + mes + "/" + ano;
                    element.time = dataFormatada;
                    return element;
                });
                const root = {
                    registries: treatedList
                };
                return MenuModel_1.MenuModel.makeGuard(0, root);
            case 4:
                return MenuModel_1.MenuModel.makeAdmin(0, null);
        }
    }
};
exports.RegistryController = RegistryController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('registry'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegistryController.prototype, "root", null);
exports.RegistryController = RegistryController = __decorate([
    (0, common_1.Controller)('registry'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        registry_service_1.RegistryService])
], RegistryController);
//# sourceMappingURL=registry.controller.js.map