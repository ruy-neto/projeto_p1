import { Body, Controller, Get, Post, Render, Req, Session } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private jwtService: JwtService) {}
  @Get()
  @Render('login') // Renderiza a página home.hbs com o layout principal
  root(@Req() req: Request,@Session() session: Record<string, any>): any {
    return { pageTitle: 'Login' };
  }

  @Post()
  async loginPost(
    @Req() req: Request,
    @Session() session: Record<string, any>,
    @Body() body: LoginBody) {
    const elements = await this.appService.login(body.user);
    const element = elements[0];
    if (element == null) {
      return 'Não existe esse usuário!';
    } else {
      const elementPassword = element[0][0].password;
      if (await bcrypt.compare( body.password,elementPassword)) {
        const token = this.jwtService.sign({ user: element[0][0].user, rank: element[0][0].rank });
        session.token = token;
        console.log("Sessão: ",session);
        req.res.redirect('/home')
        return 'Existe esse usuário';
      } else {
        return 'Senha errada!';
      }
    }
  }
}

// interface ISession extends Session {
//   token?: string;
// };

interface LoginBody {
  user: string;
  password: string;
}