import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastrarModule } from './cadastrar/cadastrar.module';
import { DatabaseConfig } from './databaseconfig/database.config';
import { MysqlService } from './mysqlservice/mysqlservice.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { HomeController } from './home/home.controller';
import { SessionModule } from 'nestjs-session';
import { AuthMiddleware } from './authjwt/authjwt.middleware';

@Module({
  imports: [CadastrarModule,
    SessionModule.forRoot({
      session: {
        secret: 'aezakmi',
        resave: false,
        saveUninitialized: false,
      },
    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '8h' },
    }),

  ],
  controllers: [AppController, HomeController],
  providers: [AppService,MysqlService,DatabaseConfig],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('home');
  }
}