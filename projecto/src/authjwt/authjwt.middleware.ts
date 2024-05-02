import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.session === undefined || req.session === null) {
      res.redirect('/');
    }
    const token = (req.session as any).token; // Supondo que o token JWT esteja armazenado na sessão

    if (!token) {
      // Se não houver token na sessão, redirecione o usuário
      res.redirect('/');
    } else {
      // Verifique se o token é válido
      try {
        // Verifique se o token é válido
        // Aqui você pode verificar se o token é válido usando o serviço JWT
        // const decodedToken = this.jwtService.verify(token);
        next();
      } catch (error) {
        // Se o token não for válido, redirecione o usuário
        res.redirect('/');
      }
    }
  }
}