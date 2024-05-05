import { Test, TestingModule } from '@nestjs/testing';
import { ManagerusersController } from './managerusers.controller';

describe('ManagerusersController', () => {
  let controller: ManagerusersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagerusersController],
    }).compile();

    controller = module.get<ManagerusersController>(ManagerusersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
