import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html'
})
export class ErrorComponent {
    @Input() errorMessages: string[] = [];
    isExpanded: boolean = false;
    isPinned: boolean = false;

    public closeError(event: Event) {
        event.stopPropagation();
        this.errorMessages = [];
    }

    public togglePin(event: Event) {
        event.stopPropagation();
        this.isPinned = !this.isPinned;
        if (this.isPinned) {
            this.isExpanded = true;
        }
        else {
            this.isExpanded = false;
        }
    }

    public toggleExpand() {
        if (!this.isPinned) {
            this.isExpanded = !this.isExpanded;
        }
    }

    public removeError(error: string) {
        this.errorMessages = this.errorMessages.filter(e => e !== error);
    }
}
