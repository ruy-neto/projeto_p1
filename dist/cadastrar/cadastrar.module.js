"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastrarModule = void 0;
const common_1 = require("@nestjs/common");
const database_config_1 = require("../databaseconfig/database.config");
const mysqlservice_service_1 = require("../mysqlservice/mysqlservice.service");
const cadastrar_adm_service_1 = require("./cadastrar-adm.service");
const cadastrar_controller_1 = require("./cadastrar.controller");
let CadastrarModule = class CadastrarModule {
};
exports.CadastrarModule = CadastrarModule;
exports.CadastrarModule = CadastrarModule = __decorate([
    (0, common_1.Module)({
        controllers: [cadastrar_controller_1.CadastrarController],
        providers: [mysqlservice_service_1.PostgresService, cadastrar_adm_service_1.CadastrarAdmService, database_config_1.DatabaseConfig]
    })
], CadastrarModule);
//# sourceMappingURL=cadastrar.module.js.map