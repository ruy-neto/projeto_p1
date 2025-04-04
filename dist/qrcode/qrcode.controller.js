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
exports.QrcodeController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const mysqlservice_service_1 = require("../mysqlservice/mysqlservice.service");
const jwt_1 = require("@nestjs/jwt");
let QrcodeController = class QrcodeController {
    constructor(mysqlService, jwtService) {
        this.mysqlService = mysqlService;
        this.jwtService = jwtService;
    }
    async root(res, params) {
        try {
            console.log("Cheguei até o qrcode");
            const queryresult = await this.mysqlService.callQRCodeChecker(params.code);
            const array = queryresult[0];
            console.log("Valor do array", array);
            if (array.length == 0) {
                res.status(404).send("QRCODE INVALIDO");
            }
            else {
                res.status(200).send(new StudentResponse(array.studentid, array.studentname, array.parentname));
            }
        }
        catch (error) {
            console.log("Problema envolvendo banco", error);
            return "Problema envolvendo banco";
        }
    }
    async register(res, session, body) {
        try {
            const sessionData = session.token;
            const token = this.jwtService.decode(sessionData);
            console.log("O que eu recebi aqui para salvar o registro do qrcode", token);
            const queryresult = await this.mysqlService.callQRCODERegister(body.id_guard, body.id_student, body.ischeckin);
            res.status(200).send();
        }
        catch (error) {
            res.status(403).send();
        }
    }
};
exports.QrcodeController = QrcodeController;
__decorate([
    (0, common_1.Get)(':code'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], QrcodeController.prototype, "root", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Session)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], QrcodeController.prototype, "register", null);
exports.QrcodeController = QrcodeController = __decorate([
    (0, common_1.Controller)('qrcode'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [mysqlservice_service_1.PostgresService,
        jwt_1.JwtService])
], QrcodeController);
class StudentResponse {
    constructor(studentId, studentName, parentName) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.parentName = parentName;
    }
}
//# sourceMappingURL=qrcode.controller.js.map