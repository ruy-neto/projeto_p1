import { Controller, Get, Render, Session, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from 'src/auth/auth.guard';
import { ISession } from 'src/models/ISession';
import { MenuModel } from 'src/models/MenuModel';

@Controller('registrate')
@UseGuards(AuthGuard)
export class RegistrateController {
    constructor(public jwtService:JwtService) {}
    @Get()
    @Render("registrate")
    root(
        @Session() session:Record<string, any>
    ) {
        const sess = (session as ISession);
        const bodySession = this.jwtService.decode(session.token);
        console.log("Corpo da sessão:",bodySession);
        return MenuModel.makeGuard(1,{guardid:4});
    }

    @Get("success")
    @Render('qrcodesuccess')
    sucesso(){
    }
}
