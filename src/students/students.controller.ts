import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { MysqlService } from 'src/mysqlservice/mysqlservice.service';
import { Response } from 'express';


@Controller('students')
export class StudentsController {
    constructor(private readonly mysqlService:MysqlService){}
  @Get()
  async getEstudantes(
    @Res() res: Response
  ) {
    try {
        const queryresult = await this.mysqlService.callGetAllStudents();
        const array = queryresult[0] as any[];
        if (array.length == 0) {
            res.status(HttpStatus.BAD_REQUEST);
        } else {
            res.status(HttpStatus.OK).json(queryresult.at(0));
        }
    } catch (error) {
        console.log(error);
    }
  }
}