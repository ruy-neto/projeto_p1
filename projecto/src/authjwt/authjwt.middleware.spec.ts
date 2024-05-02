import { AuthjwtMiddleware } from './authjwt.middleware';

describe('AuthjwtMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthjwtMiddleware()).toBeDefined();
  });
});
