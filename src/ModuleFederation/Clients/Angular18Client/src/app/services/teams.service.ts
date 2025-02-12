import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Team } from '../models/team';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoggerService } from '@pravinchandankhede/mfelibrary';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TeamsService {

    public getTeamsUrl = 'api/staff';

    constructor(
        protected readonly http: HttpClient,
        protected readonly loggerService: LoggerService) {

    }

    public getTeams(employeeId?: number): Observable<Array<Team>> {
        let url = environment.apiBaseUrl + 'api/Teams';

        return this.http.get<Array<Team>>(url)
            // Map the response data to an array of Team objects
            .pipe(map((data: Array<Team>): Array<Team> => data),
                // Handle any errors that occur during the request
                catchError((error: HttpErrorResponse) => {
                    this.loggerService.log(error.message);
                    throw error; // rethrow the error to propagate it downstream
                }
                ));
    }
}
