import { Component } from '@angular/core';
import { LoggerService } from '@pravinchandankhede/mfelibrary';

@Component({
  selector: 'config',
    templateUrl: './config.component.html',
    standalone: false
})
export class ConfigComponent {

    constructor(logger: LoggerService) {
        logger.log('Config page Log');
    }
}
