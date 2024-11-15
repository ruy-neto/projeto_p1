import { Body, Controller, Get, Post, Render, Session, UseGuards,Res, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from 'src/auth/auth.guard';
import { ISession } from 'src/models/ISession';
import { MenuModel } from 'src/models/MenuModel';
import { MysqlService } from 'src/mysqlservice/mysqlservice.service';
import { Response } from 'express';
import {Tipo} from '../occurencie';
import axios from 'axios';
@Controller('occurrences')
export class OccurrencesController {
    constructor(public jwtService:JwtService,private readonly mysqlService:MysqlService) {}
    @Get()
    @Render("occurrences")
    @UseGuards(AuthGuard)
    root(
        @Session() session:Record<string, any>
    ) {
        const sess = (session as ISession);
        const bodySession = this.jwtService.decode(session.token);
        console.log("Corpo da sessão:",bodySession);
        return MenuModel.makeGuard(1,{guardid:bodySession.id});
    }

    @Post()
    async create
    (@Body() body: any,@Res() res: Response) {
        try {
            console.log("1");
            const queryresult = await this.mysqlService.insertOccurence(body);
            const array = queryresult[0] as any[];
            if (array.length == 0) {
                console.log("2");
                res.status(HttpStatus.BAD_REQUEST);
            } else {
                console.log("3");
                this.sendsms(body.name_student,body.type)
                res.status(HttpStatus.OK).json(queryresult.at(0));
            }
        } catch (error) {
            console.log("4");
            console.log(error);
        }
    }

    async sendsms(name:string,type: string) {
        // var request = require("request");

        // var options = {
        // method: 'POST',
        // url: 'https://sms.comtele.com.br/api/v2/send',
        // headers: {
        //     'content-type': 'application/json',
        //     'auth-key': 'f0817420-da4b-4c00-85df-6a210abd2b5f'
        // },
        // body: '{"Sender":"sender_id","Receivers":"11981309580","Content":"Olá, tivemos uma ocorrencia inesperada com um dos alunos. Razão: '+type+'"}'
        // };

        // request(options, function (error, response, body) {
        // if (error) {
        //     console.log(error);
        //     throw new Error(error);
        // }

        // console.log(body);
        // });
        try {
            const response = await axios.post(
              'https://sms.comtele.com.br/api/v2/send',
              {
                Sender: 'sender_id',
                Receivers: '11981309580',
                Content: `TEG-INFORMA : Olá, caro(a) responsável da ${name}, tivemos uma ocorrência inesperada com um dos alunos. Razão: ${this.getEnumKeyByValue(Number(type))}`
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                  'auth-key': 'f0817420-da4b-4c00-85df-6a210abd2b5f'
                }
              }
            );
      
            console.log(response.data);
            return response.data;
          } catch (error) {
            console.error(error);
            throw new Error(error);
          }
    }

    getEnumKeyByValue(value: number): string | undefined {
        return Tipo[value];
    }
}
