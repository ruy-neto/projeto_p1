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
        @Res() res: Response,
        @Session() session: Record<string, any>
    ){
        const sess = (session as ISession);
        const bodySessionBody = this.jwtService.decode(session.token);
        console.log("cheguei ate aqui com ranking"+ bodySessionBody.rank);
        switch (bodySessionBody.rank) {
            default:
                return res.redirect('/');
            case 2:
                return MenuModel.makeParent(0,null);
            case 3:
                return MenuModel.makeGuard(0,null);
            case 4:
                return MenuModel.makeAdmin(0,null);
        }
    }
}
