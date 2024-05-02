import { Controller, Get, Req, Res, Session} from '@nestjs/common';
import { Request,Response } from 'express';
import { JwtService } from '@nestjs/jwt'; 

@Controller('home')
export class HomeController {
    constructor(private jwtService: JwtService) {}

    @Get()
    root(
        @Req() req: Request,
        @Res() resp: Response ,
        @Session() session: Record<string, any>) {
        const token = session.token;
        return "Zona Logada";
    }
}