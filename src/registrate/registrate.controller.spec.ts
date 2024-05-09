import { Test, TestingModule } from '@nestjs/testing';
import { RegistrateController } from './registrate.controller';

describe('RegistrateController', () => {
  let controller: RegistrateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrateController],
    }).compile();

    controller = module.get<RegistrateController>(RegistrateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
