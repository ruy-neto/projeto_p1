import { Body } from '@nestjs/common';
import { CadastrarAdmService } from './cadastrar-adm.service';
export declare class CadastrarController {
    private readonly cadastrarADMService;
    constructor(cadastrarADMService: CadastrarAdmService);
    cadastrar(body: Body): Promise<any>;
    root(req: Request): any;
}
interface Body {
    user: string;
    password: string;
}
export {};
