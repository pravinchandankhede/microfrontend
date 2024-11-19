import { Component } from '@angular/core';
import { LoggerService } from 'mfelibrary';
import { NotificationSharedService } from '../shared/notificationshared.service';

@Component({
  selector: 'home',
  templateUrl: './staff.component.html'
})
export class StaffComponent {

  constructor(logger : LoggerService, notifyService: NotificationSharedService) {
      logger.log('staff cons');
      //notificationService.log('message');
      notifyService.log('notify');
  }
}
