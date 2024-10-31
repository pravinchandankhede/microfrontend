import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  public async log(msg: string): Promise<void> {
    console.log('library  ' + msg);
  }
}
