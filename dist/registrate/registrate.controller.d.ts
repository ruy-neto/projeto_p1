import { JwtService } from '@nestjs/jwt';
import { MenuModel } from 'src/models/MenuModel';
export declare class RegistrateController {
    jwtService: JwtService;
    constructor(jwtService: JwtService);
    root(session: Record<string, any>): MenuModel;
    sucesso(): void;
}
