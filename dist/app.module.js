"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cadastrar_module_1 = require("./cadastrar/cadastrar.module");
const database_config_1 = require("./databaseconfig/database.config");
const mysqlservice_service_1 = require("./mysqlservice/mysqlservice.service");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("./auth/constants");
const home_controller_1 = require("./home/home.controller");
const nestjs_session_1 = require("nestjs-session");
const managerusers_controller_1 = require("./managerusers/managerusers.controller");
const manager_service_1 = require("./managerusers/manager/manager.service");
const registrate_controller_1 = require("./registrate/registrate.controller");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const qrcode_controller_1 = require("./qrcode/qrcode.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [cadastrar_module_1.CadastrarModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'node_modules'),
            }),
            jwt_1.JwtModule.register({
                global: true,
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '8h' },
            }),
            nestjs_session_1.SessionModule.forRoot({
                session: {
                    secret: 'aezakmi',
                    resave: false,
                    saveUninitialized: false,
                    cookie: {
                        maxAge: 1000 * 60 * 30,
                        sameSite: true,
                        secure: false,
                        httpOnly: true
                    }
                },
            })
        ],
        controllers: [app_controller_1.AppController, home_controller_1.HomeController, managerusers_controller_1.ManagerusersController, registrate_controller_1.RegistrateController, qrcode_controller_1.QrcodeController],
        providers: [app_service_1.AppService, mysqlservice_service_1.MysqlService, database_config_1.DatabaseConfig, manager_service_1.ManagerService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map