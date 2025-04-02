import { ConfigService } from '@nestjs/config';
export declare class DatabaseConfig {
    private configService;
    constructor(configService: ConfigService);
    host: string;
    database: string;
    user: string;
    password: string;
}
