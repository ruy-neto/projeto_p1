"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const express_handlebars_1 = require("express-handlebars");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.set('view engine', 'hbs');
    app.engine('hbs', (0, express_handlebars_1.engine)({
        extname: '.hbs',
        defaultLayout: 'layout',
        layoutsDir: (0, path_1.join)(__dirname, '..', 'views', 'layouts'),
        helpers: {
            json: function (context) {
                return JSON.stringify(context);
            }
        }
    }));
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map