import { Controller, Get, Render, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { MenuModel } from 'src/models/MenuModel';

@Controller('registrate')
@UseGuards(AuthGuard)
export class RegistrateController {
    @Get()
    @Render("registrate")
    root() {
        return MenuModel.makeGuard(1,null);
    }
}
