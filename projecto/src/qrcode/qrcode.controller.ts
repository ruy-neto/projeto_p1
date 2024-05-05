import { Controller, Get, Param, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { MysqlService } from 'src/mysqlservice/mysqlservice.service';
import { Response } from 'express';

@Controller('qrcode')
@UseGuards(AuthGuard)
export class QrcodeController {
    constructor(private readonly mysqlService: MysqlService) {}
    @Get(':qrcode')
    async root(
        @Res() res: Response,
        @Param('qrcode') qrcode: string
    ){
        try {
            const queryresult = await this.mysqlService.callQRCodeChecker(qrcode);
            console.log(queryresult);
            const array = queryresult[0] as any[];
            if (array.length == 0) {
                return res.status(404).send("QRCODE INVALIDO");
            } else {
                return new StudentResponse(array.at(0).studentname,array.at(0).parentname);
            }
        } catch (error) {
            return "Problema envolvendo banco"
        }
    }
}

class StudentResponse {
    constructor(
        public studentName: String,
        public parentName: String
        ){}
}