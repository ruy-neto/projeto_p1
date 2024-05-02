import { Body, Controller, Get, Post, Render, Req } from '@nestjs/common';
import { CadastrarAdmService } from './cadastrar-adm.service';

@Controller('cadastrar')
export class CadastrarController {
    constructor(private readonly cadastrarADMService: CadastrarAdmService) {}
    @Post()
    async cadastrar(@Body() body: Body): Promise<any> {
        console.log('Corpo da solicitação:', body);

        if (body.user === '' || body.password === '') {
            return 'Algum campo está vazío';
        }

        await this.cadastrarADMService.cadastrarAdmin(body.user,body.password);
        return 'Solicitação POST recebida com sucesso!';
    }

  @Get()
  @Render('cadastrar') // Renderiza a página home.hbs com o layout principal
  root(@Req() req: Request): any {
    return { pageTitle: 'Cadastrar' };
  }
}

interface Body {
    user: string;
    password: string;
}