import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import {engine} from 'express-handlebars';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.set('view engine', 'hbs');
  app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'layout',
    layoutsDir: join(__dirname, '..', 'views', 'layouts'),
    helpers: {
      json: function(context) {
        return JSON.stringify(context);
      }
    }
  }));
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
