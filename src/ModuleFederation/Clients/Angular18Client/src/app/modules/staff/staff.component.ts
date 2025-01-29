import { Component, OnInit } from '@angular/core';
import { LoggerService } from '@pravinchandankhede/mfelibrary';
import { NotificationSharedService } from '../shared/notificationshared.service';
import { StaffService } from '../../services/staff.service';
import { Staff } from '../../models/staff';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'home',
    templateUrl: './staff.component.html'
})
export class StaffComponent implements OnInit {

    staff!: Array<Staff>;

    constructor(
        private readonly loggerService: LoggerService,
        private readonly notifyService: NotificationSharedService,
        private readonly staffService: StaffService) {
        loggerService.log('staff cons');
        //notificationService.log('message');
        notifyService.log('notify');
    }

    ngOnInit() {

        this.staffService.getStaff()
            .subscribe((staff: Array<Staff>): void => {
                this.staff = staff;
            }, (error: HttpErrorResponse): void => {
                this.loggerService.log(error.message);
            });
    }
}
