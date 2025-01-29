import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventBus, LoggerService, ThemeChangedEvent, ThemeChangedEventData, ErrorEvent, ErrorEventData } from '@pravinchandankhede/mfelibrary';
import { HideMenuEvent, HideMenuEventData } from '../../models/custom.events';
import { TeamsService } from '../../services/teams.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Team } from '../../models/team';
import { Subscription } from 'rxjs';

@Component({
    selector: 'home',
    templateUrl: './team.component.html'
})
export class TeamComponent implements OnInit, OnDestroy {

    teams!: Array<Team>;
    menuEventSubscription: Subscription;
    //handler: any;

    constructor(
        private eventBus: EventBus,
        protected readonly teamsService: TeamsService,
        protected readonly loggerService: LoggerService) {

        this.menuEventSubscription = this.eventBus.on<HideMenuEventData>('HideMenuEvent').subscribe((event: HideMenuEventData) => {
            console.log('HideEventMenu callback ' + event.hide); // Outputs the theme name
        });
    }

    ngOnInit() {
        this.eventBus.emit(new ThemeChangedEvent(new ThemeChangedEventData()));

        this.eventBus.emit(new HideMenuEvent(new HideMenuEventData()));

        this.teamsService.getTeams()
            .subscribe({
                next: (teams: Array<Team>): void => {
                    this.teams = teams;
                }, error: (error: HttpErrorResponse): void => {
                    this.eventBus.emit(new ErrorEvent(new ErrorEventData("team", error.message)));
                    this.loggerService.log(error.message);
                }
            });

        //this.handler = setInterval(() => {
        //    let msg = "error message " + getLocaleDateFormat("en-US", new FormatWidth());
        //    this.loggerService.log(msg);
        //    this.eventBus.emit(new ErrorEvent(new ErrorEventData("team", msg)));
        //}, 2000);
    }

    ngOnDestroy() {
        this.menuEventSubscription.unsubscribe();
        //clearInterval(this.handler);
    }
}
