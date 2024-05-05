import { Controller, Get, Render, Req, Res, Session, UseGuards} from '@nestjs/common';
import { Request,Response } from 'express';
import { JwtService } from '@nestjs/jwt'; 
import { AuthGuard } from 'src/auth/auth.guard';
import { ISession } from 'src/models/ISession';
import { MenuModel } from 'src/models/MenuModel';

@Controller('home')
@UseGuards(AuthGuard)
export class HomeController {
    constructor(private jwtService: JwtService) {}

    @Get()
    @Render('home')
    root(
        @Session() session: Record<string, any>
    ){
        const sess = (session as ISession);
        const body = this.jwtService.decode(session.token);
        return MenuModel.makeAdmin(0,null);
    }
}
