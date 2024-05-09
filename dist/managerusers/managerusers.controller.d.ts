import { MenuModel } from 'src/models/MenuModel';
import { ManagerService } from './manager/manager.service';
import { Response } from 'express';
export declare class ManagerusersController {
    managerService: ManagerService;
    constructor(managerService: ManagerService);
    root(res: Response): Promise<MenuModel | {
        error: any;
    }>;
    create(res: Response, session: Record<string, any>, body: any): Promise<string>;
}
