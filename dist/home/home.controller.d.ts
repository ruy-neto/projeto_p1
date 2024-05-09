import { JwtService } from '@nestjs/jwt';
import { MenuModel } from 'src/models/MenuModel';
export declare class HomeController {
    private jwtService;
    constructor(jwtService: JwtService);
    root(session: Record<string, any>): MenuModel;
}
