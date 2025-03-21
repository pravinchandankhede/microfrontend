import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaffService } from '../services/staff.service';
import { CommonModule } from '@angular/common';
import { Staff } from '../models/staff';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorEventData, ErrorEvent, EventBus, LoggerService } from '@pravinchandankhede/mfelibrary';
import { catchError, of } from 'rxjs';

@Component({
    selector: 'app-contact-details',
    standalone: true,
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.css'],
    imports: [CommonModule],
})
export class ContactDetailsComponent implements OnInit {
    staff: any;
    loadingMessage = 'Loading...';

    constructor(private route: ActivatedRoute,
        private staffService: StaffService,
        private readonly loggerService: LoggerService,
        private readonly eventBus: EventBus,
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id && Number.isInteger(Number.parseInt(id))) {
            this.getStaffDetails(id);
        }
        else {
            this.eventBus.emit(new ErrorEvent(new ErrorEventData('Error', 'Invalid staff id')));
            this.loadingMessage = 'Invalid staff id';
        }
        //    if (Number.isInteger(Number.parseInt(id))) {
        //        this.getStaffDetails(id);
        //    }
    }

    getStaffDetails(id: string | null): void {
        if (id) {

            this.staffService.getStaffDetails(id).pipe(
                catchError((error: HttpErrorResponse) => {
                    this.loggerService.log(error.message);
                    return of(null);
                })
            ).subscribe(data => {
                this.staff = data;
            });
        }
    }
}
