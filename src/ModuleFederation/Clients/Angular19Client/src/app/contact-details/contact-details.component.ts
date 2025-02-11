import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaffService } from '../services/staff.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact-details',
    standalone: true,
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.css'],
    imports: [CommonModule],
})
export class ContactDetailsComponent implements OnInit {
    staff: any;

    constructor(private route: ActivatedRoute, private staffService: StaffService) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.getStaffDetails(id);
    }

    getStaffDetails(id: string | null): void {
        if (id) {
            this.staffService.getStaffDetails(id).subscribe(data => {
                this.staff = data;
            });
        }
    }
}
