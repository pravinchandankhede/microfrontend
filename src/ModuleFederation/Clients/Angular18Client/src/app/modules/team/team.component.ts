import { Component, OnInit } from '@angular/core';
import { EventBus, ThemeChangedEvent, ThemeChangedEventData } from 'mfelibrary';
import { HideMenuEvent, HideMenuEventData } from '../../models/custom.events';

@Component({
  selector: 'home',
  templateUrl: './team.component.html'
})
export class TeamComponent implements OnInit {

    constructor(private eventBus: EventBus) {

    }

    ngOnInit() {
        this.eventBus.emit(new ThemeChangedEvent(new ThemeChangedEventData()));

        this.eventBus.emit(new HideMenuEvent(new HideMenuEventData()));

        this.eventBus.on<HideMenuEventData>('HideMenuEvent').subscribe((event: HideMenuEventData) => {
            console.log(event.hide); // Outputs the theme name
        });
    }
}
