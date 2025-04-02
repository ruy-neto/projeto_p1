import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { PostgresService } from 'src/mysqlservice/mysqlservice.service';
import { Response } from 'express';


@Controller('students')
export class StudentsController {
    constructor(private readonly mysqlService:PostgresService){}
  @Get()
  async getEstudantes(
    @Res() res: Response
  ) {
    try {
        const queryresult = await this.mysqlService.callGetAllStudents();
        const array = queryresult as any[];
        if (array.length == 0) {
            res.status(HttpStatus.BAD_REQUEST);
        } else {
            res.status(HttpStatus.OK).json(queryresult);
        }
    } catch (error) {
        console.log(error);
    }
  }
}