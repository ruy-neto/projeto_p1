import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastrarModule } from './cadastrar/cadastrar.module';
import { DatabaseConfig } from './databaseconfig/database.config';
import { MysqlService } from './mysqlservice/mysqlservice.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { HomeController } from './home/home.controller';
import { SessionModule } from 'nestjs-session';
import { ManagerusersController } from './managerusers/managerusers.controller';
import { ManagerService } from './managerusers/manager/manager.service';
import { RegistrateController } from './registrate/registrate.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { QrcodeController } from './qrcode/qrcode.controller';
import { RegistryController } from './registry/registry.controller';
import { RegistryService } from './registry/registry/registry.service';
import { OccurrencesController } from './occurrences/occurrences.controller';
import { StudentsController } from './students/students.controller';

@Module({
  imports: [CadastrarModule,  
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'node_modules'),
    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '8h' },
    }),
    SessionModule.forRoot({
      session: {
        secret: 'aezakmi',
        resave: false,
        saveUninitialized: false,
        cookie:{
          maxAge: 1000 * 60 * 30,
          sameSite: true,
          secure: false, // ajustar para false em conexoes HTTP
          httpOnly: true
          }
      },
    })
  ],
  controllers: [AppController, HomeController, ManagerusersController, RegistrateController, QrcodeController, RegistryController, OccurrencesController, StudentsController],
  providers: [AppService,MysqlService,DatabaseConfig, ManagerService,RegistryService],
})
export class AppModule {}