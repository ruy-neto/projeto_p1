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
exports.StudentsController = void 0;
const common_1 = require("@nestjs/common");
const mysqlservice_service_1 = require("../mysqlservice/mysqlservice.service");
let StudentsController = class StudentsController {
    constructor(mysqlService) {
        this.mysqlService = mysqlService;
    }
    async getEstudantes(res) {
        try {
            const queryresult = await this.mysqlService.callGetAllStudents();
            const array = queryresult[0];
            if (array.length == 0) {
                res.status(common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                res.status(common_1.HttpStatus.OK).json(queryresult.at(0));
            }
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.StudentsController = StudentsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getEstudantes", null);
exports.StudentsController = StudentsController = __decorate([
    (0, common_1.Controller)('students'),
    __metadata("design:paramtypes", [mysqlservice_service_1.MysqlService])
], StudentsController);
//# sourceMappingURL=students.controller.js.map