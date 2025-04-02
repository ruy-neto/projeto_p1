import { Body, Controller, Get, Post, Render, Req, Res, Session } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
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
    @Res() res: Response,
    @Session() session: Record<string, any>,
    @Body() body: LoginBody) {
    const elements = await this.appService.login(body.user);
    const element = elements[0];
    if (element == null) {
      return 'Não existe esse usuário!';
    } else {
      const elementPassword = element.password;
      if (await bcrypt.compare( body.password,elementPassword)) {
        const token = this.jwtService.sign({ id:element.id,user: element.user, rank: element.rank });
        session.token = token;
        console.log("Vou te direcionar para a home");
        return res.redirect('/home')
      } else {
        return 'Senha errada!';
      }
    }
  }
}

interface LoginBody {
  user: string;
  password: string;
}