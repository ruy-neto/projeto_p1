import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { MenuModel } from 'src/models/MenuModel';
export declare class HomeController {
    private jwtService;
    constructor(jwtService: JwtService);
    root(res: Response, session: Record<string, any>): void | MenuModel;
}
