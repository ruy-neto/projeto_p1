import { Controller, Get, Render, Res, Session, UseGuards} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'; 
import { AuthGuard } from 'src/auth/auth.guard';
import { ISession } from 'src/models/ISession';
import { MenuModel } from 'src/models/MenuModel';
import { RegistryService } from './registry/registry.service';
import { Response } from 'express';


@Controller('registry')
@UseGuards(AuthGuard)
export class RegistryController {
    constructor(
        private jwtService: JwtService,
        private registryService: RegistryService
    ) {}

    @Get()
    @Render('registry')
    async root(
        @Res() res: Response,
        @Session() session: Record<string, any>
    ){
        const sess = (session as ISession);
        const bodySessionBody = this.jwtService.decode(session.token);
        switch (bodySessionBody.rank) {
            default:
                return res.redirect('/home');
            case 2:
                console.log("It is a Tuesday.");
                break;
            case 3:
                const id = bodySessionBody.id
                const tuple = await this.registryService.getGuardRegistriesList(id);
                const list = tuple[0];
                console.log("Guarda Lista:",list);
                const treatedList = list.map(element => {
                    var data = new Date(element.time);

                    var hora = data.getUTCHours();
                    var minuto = data.getUTCMinutes();
                    var dia = data.getUTCDate();
                    var mes = data.getUTCMonth() + 1; 
                    var ano = data.getUTCFullYear();

                    var dataFormatada = hora + ":" + minuto + " do dia " + dia + "/" + mes + "/" + ano;

                    element.time = dataFormatada;

                    return element
                });

                const root =  {
                    registries: treatedList
                }

                return MenuModel.makeGuard(2,root);
        }
    }
}
