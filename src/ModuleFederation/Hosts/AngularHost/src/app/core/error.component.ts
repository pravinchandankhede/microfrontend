import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html'    
})
export class ErrorComponent {
    @Input() errorMessage: string | null = null;
    isExpanded: boolean = false;
    isPinned: boolean = false;

    closeError() {
        this.errorMessage = null;
        this.toggleExpand();
    }

    togglePin() {
        this.isPinned = !this.isPinned;
        if (this.isPinned) {
            this.isExpanded = true;
        }
        else {
            this.isExpanded = false;
        }
    }

    toggleExpand() {
        if (!this.isPinned) {
            this.isExpanded = !this.isExpanded;
        }
    }
}
