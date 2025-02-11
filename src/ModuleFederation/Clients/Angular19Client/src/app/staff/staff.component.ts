import { Component, OnInit } from '@angular/core';
import { LoggerService } from '@pravinchandankhede/mfelibrary';
import { StaffService } from '../services/staff.service';
import { Staff } from '../models/staff';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'home',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './staff.component.html'
})
export class StaffComponent implements OnInit {

    staff!: Array<Staff>;

    constructor(
        private readonly loggerService: LoggerService,
        private readonly staffService: StaffService) {
        loggerService.log('staff cons');

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
