import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    public async notify(msg: string): Promise<void> {
        alert(msg);
    }
}
