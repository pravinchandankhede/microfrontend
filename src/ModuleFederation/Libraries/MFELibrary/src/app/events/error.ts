import { BaseEvent, IBaseEventData } from "./event-models";

export class ErrorEventData extends IBaseEventData {

    constructor(errorTitle: string, errorMessage: string) {
        super();
        this.errorTitle = errorTitle;
        this.errorMessage = errorMessage;
    }

    errorTitle: string = "Error Occurred";
    errorMessage: string = "Error Occurred";
}

export class ErrorEvent extends BaseEvent {
    constructor(errorEventData: ErrorEventData) {
        super("ErrorEvent", errorEventData);
    }
}
