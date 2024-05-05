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
        const bodySessionBody = this.jwtService.decode(session.token);
        switch (bodySessionBody.rank) {
            case 0:
                console.log("It is a Sunday.");
                break;
            case 1:
                console.log("It is a Monday.");
                break;
            case 2:
                console.log("It is a Tuesday.");
                break;
            case 3:
                console.log("Sou guarda.");
                return MenuModel.makeGuard(0,null);
                break;
            case 4:
                return MenuModel.makeAdmin(0,null);
        }
    }
}
