import { Injectable } from '@angular/core';

@Injectable(
 {
    providedIn: 'root'
 }
)
export class NotificationSharedService {

    public async log(msg: string): Promise<void> {
        alert('child shared ' + msg);
        console.log('child shared ' + msg);
    }
}
