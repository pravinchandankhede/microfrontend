import { Component, OnInit } from '@angular/core';
import { EventBus, LoggerService, ThemeChangedEvent, ThemeChangedEventData } from 'mfelibrary';
import { HideMenuEvent, HideMenuEventData } from '../../models/custom.events';
import { TeamsService } from '../../services/teams.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Team } from '../../models/team';

@Component({
  selector: 'home',
  templateUrl: './team.component.html'
})
export class TeamComponent implements OnInit {

    teams!: Array<Team>;

    constructor(
        private eventBus: EventBus,
        protected readonly teamsService: TeamsService,
        protected readonly loggerService: LoggerService) {

    }

    ngOnInit() {
        this.eventBus.emit(new ThemeChangedEvent(new ThemeChangedEventData()));

        this.eventBus.emit(new HideMenuEvent(new HideMenuEventData()));

        this.eventBus.on<HideMenuEventData>('HideMenuEvent').subscribe((event: HideMenuEventData) => {
            console.log('HideEventMenu callback ' + event.hide); // Outputs the theme name
        });

        this.teamsService.getTeams()
            .subscribe((teams: Array<Team>): void => {
                this.teams = teams;
            }, (error: HttpErrorResponse): void => {
                this.loggerService.log(error.message);
            });            

        //this.accountService.getAccounts().subscribe((accounts: Array<Account>): void => {
        //    this.modifiedByAccounts = accounts;
        //    // On error, handle the error
        //}, (error: HttpErrorResponse): void => {
        //    CoreNotificationService.handleError(error);
        //});
    }
}
