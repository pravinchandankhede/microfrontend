import { Component } from '@angular/core';
import { LoggerService } from '@pravinchandankhede/mfelibrary';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

    constructor(logger: LoggerService) {
        logger.log('Home Log');
    }
}
