import { Body, Controller, Get, Param, Post, Render, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { MysqlService } from 'src/mysqlservice/mysqlservice.service';
import { Response } from 'express';

@Controller('qrcode')
@UseGuards(AuthGuard)
export class QrcodeController {
    constructor(private readonly mysqlService: MysqlService) {}
    @Get(':code')
    async root(
        @Res() res: Response,
        @Param() params: any
    ){
        try {
            console.log("O que eu recebi aqui:",params.code);
            const queryresult = await this.mysqlService.callQRCodeChecker(params.code);
            const array = queryresult[0] as any[];
            if (array.length == 0) {

                res.status(404).send("QRCODE INVALIDO");
            } else {
                res.status(200).send(new StudentResponse(array.at(0).studentid,array.at(0).studentname,array.at(0).parentname));
            }
        } catch (error) {
            return "Problema envolvendo banco"
        }
    }

    @Post()
    async register(
        @Res() res: Response,
        @Body() body: any
        ){
        try {
            const queryresult = await this.mysqlService.callQRCODERegister(body.id_guard,body.id_student,body.ischeckin);
            res.status(200).send();
        } catch (error) {
            res.status(403).send();
        }
    }
}

class StudentResponse {
    constructor(
        public studentId: number,
        public studentName: String,
        public parentName: String
        ){}
}