import { Body, Controller, Get, Post, Render, Res, Session, UseGuards } from '@nestjs/common';
import { AdminOnlyGuard } from 'src/admin-only/admin-only.guard';
import { MenuModel } from 'src/models/MenuModel';
import { ManagerService } from './manager/manager.service';
import { Response} from 'express';

@Controller('users')
@UseGuards(AdminOnlyGuard)
export class ManagerusersController {
    constructor(public managerService: ManagerService){}
    @Get()
    @Render("managerusers")
    async root(
        @Res() res: Response
    ) {
        try {
            const listParents = await this.managerService.listParents();

            return MenuModel.makeAdmin(1,{listParents:listParents[0]});
        } catch (error) {
            return {error}
        }
    }

    @Post()
    async create(
        @Res() res: Response,
        @Session() session: Record<string, any>,
        @Body() body: any
        ) {
            try {
                await this.managerService.addUser(body);
                res.redirect("home");
            } catch (error) {
                return `Error ${error}`;
            }
    }
}