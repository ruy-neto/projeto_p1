import { JwtService } from '@nestjs/jwt';
import { MenuModel } from 'src/models/MenuModel';
import { RegistryService } from './registry/registry.service';
export declare class RegistryController {
    private jwtService;
    private registryService;
    constructor(jwtService: JwtService, registryService: RegistryService);
    root(session: Record<string, any>): Promise<MenuModel>;
}
