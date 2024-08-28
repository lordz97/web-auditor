import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { GlobalConstants } from './Global';

@Injectable({
  providedIn: 'root'
})
export class ActivatorService implements CanActivate{

  canActivate(): boolean{
    return GlobalConstants.isLogged
  }
}
