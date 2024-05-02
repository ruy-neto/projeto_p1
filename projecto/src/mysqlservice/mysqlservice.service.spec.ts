import { Test, TestingModule } from '@nestjs/testing';
import { MysqlserviceService } from './mysqlservice.service';

describe('MysqlserviceService', () => {
  let service: MysqlserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MysqlserviceService],
    }).compile();

    service = module.get<MysqlserviceService>(MysqlserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
