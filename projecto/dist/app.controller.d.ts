import { AppService } from './app.service';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
export declare class AppController {
    private readonly appService;
    private jwtService;
    constructor(appService: AppService, jwtService: JwtService);
    root(req: Request, session: Record<string, any>): any;
    loginPost(res: Response, session: Record<string, any>, body: LoginBody): Promise<void | "Não existe esse usuário!" | "Senha errada!">;
}
interface LoginBody {
    user: string;
    password: string;
}
export {};
