import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Staff } from '../models/staff';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoggerService } from 'mfelibrary';

@Injectable({
    providedIn: 'root'
})
export class StaffService {

    constructor(
        protected readonly http: HttpClient,
        protected readonly loggerService: LoggerService) {

    }

    public getStaff(staffId?: number): Observable<Array<Staff>> {
        let url = 'https://localhost:7246/api/staff';

        return this.http.get<Array<Staff>>(url)
            // Map the response data to an array of Team objects
            .pipe(map((data: Array<Staff>): Array<Staff> => data),
                // Handle any errors that occur during the request
                catchError((error: HttpErrorResponse) => {
                    this.loggerService.log(error.message);
                    throw error; // rethrow the error to propagate it downstream
                }
                ));
    }
}
