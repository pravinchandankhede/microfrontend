import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    public get(key: string): string {
        return sessionStorage.getItem(key)!;
    }

    public set(key: string, value: string): void {
        sessionStorage.setItem(key, value);
    }
}
