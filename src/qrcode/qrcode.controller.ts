import { Body, Controller, Get, Param, Post, Render, Res, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { MysqlService } from 'src/mysqlservice/mysqlservice.service';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller('qrcode')
@UseGuards(AuthGuard)
export class QrcodeController {
    constructor(private readonly mysqlService: MysqlService,
        private jwtService: JwtService
    ) {}
    @Get(':code')
    async root(
        @Res() res: Response,
        @Param() params: any
    ){
        try {
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
        @Session() session: Record<string, any>,
        @Body() body: any
        ){
        try {
            const sessionData = session.token as any;
            const token = this.jwtService.decode(sessionData);
            console.log("O que eu recebi aqui para salvar o registro do qrcode",token);
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