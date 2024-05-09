import { Test, TestingModule } from '@nestjs/testing';
import { CadastrarAdmService } from './cadastrar-adm.service';

describe('CadastrarAdmService', () => {
  let service: CadastrarAdmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CadastrarAdmService],
    }).compile();

    service = module.get<CadastrarAdmService>(CadastrarAdmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
