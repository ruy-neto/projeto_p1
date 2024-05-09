import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();
    const res = context.switchToHttp().getResponse<Response>();
    const sessionData = req.session as any;
    if (sessionData.token === undefined) {
      res.redirect('/'); 
      return false;
    }

    try {
      const body = this.jwtService.verify(sessionData.token);
    } catch (error) {
      res.redirect('/'); 
      return false;
    }

    return true;
  }
}
