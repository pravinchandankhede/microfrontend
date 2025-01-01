import { Injectable } from '@angular/core';
import { Guid } from '../types/guid';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {

    // Method signatures
    log(message: string): void;
    log(message: string, level: string): void;
    log(message: string, level: string, timestamp: Date): void;
    log(message: string, level: string, timestamp: Date, correlationuid: Guid): void;

    // Method implementation
    log(message: string, level?: string, timestamp?: Date, correlationuid?: Guid): void {
        const logLevel = level || 'INFO';
        const logTimestamp = timestamp || new Date();
        const logCorrelationId = correlationuid || Guid.generate();
        console.log(`[${logTimestamp.toISOString()}] [${logCorrelationId}] [${logLevel}] ${message}`);
    }
}
