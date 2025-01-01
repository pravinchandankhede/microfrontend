import { BaseEvent, IBaseEventData } from "./event-models";

export class ErrorEventData extends IBaseEventData {
    errorTitle: string = "Error Occurred";
    errorMessage: string = "error occurred";
}

export class ThemeChangedEvent extends BaseEvent {
    constructor(errorEventData: ErrorEventData) {
        super("ErrorEvent", errorEventData);
    }
}
