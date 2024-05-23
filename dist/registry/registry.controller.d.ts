import { JwtService } from '@nestjs/jwt';
import { MenuModel } from 'src/models/MenuModel';
import { RegistryService } from './registry/registry.service';
import { Response } from 'express';
export declare class RegistryController {
    private jwtService;
    private registryService;
    constructor(jwtService: JwtService, registryService: RegistryService);
    root(res: Response, session: Record<string, any>): Promise<void | MenuModel>;
}
