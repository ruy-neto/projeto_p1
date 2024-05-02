import { Test, TestingModule } from '@nestjs/testing';
import { CadastrarController } from './cadastrar.controller';

describe('CadastrarController', () => {
  let controller: CadastrarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CadastrarController],
    }).compile();

    controller = module.get<CadastrarController>(CadastrarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
