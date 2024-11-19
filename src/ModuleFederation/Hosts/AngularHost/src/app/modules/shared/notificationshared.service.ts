import { Injectable } from '@angular/core';

@Injectable(
 {
    providedIn: 'root'
 }
)
export class NotificationSharedService {

    public async log(msg: string): Promise<void> {
        alert('shell shared ' + msg);
        console.log('shell shared ' + msg);
    }
}
