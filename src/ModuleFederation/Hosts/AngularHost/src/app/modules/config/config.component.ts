import { Component } from '@angular/core';
import { LoggerService } from 'mfelibrary';

@Component({
  selector: 'config',
  templateUrl: './config.component.html'
})
export class ConfigComponent {

    constructor(logger: LoggerService) {
        logger.log('Config page Log');
    }
}
