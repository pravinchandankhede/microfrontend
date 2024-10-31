import { Component } from '@angular/core';
import { LoggerService } from 'mfelibrary';

@Component({
  selector: 'home',
  templateUrl: './Staff.component.html'
})
export class StaffComponent {

  constructor(logger : LoggerService) {

    logger.log('staff cons');
  }
}
