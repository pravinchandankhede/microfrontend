import { BaseEvent, IBaseEventData } from "./event-models";

export class ThemeChangedEventData extends IBaseEventData {
    themeName: string = "Cyan";
}

export class ThemeChangedEvent extends BaseEvent {
    constructor(themeChangedEventData: ThemeChangedEventData) {
        super("ThemeChangedEvent", themeChangedEventData);
    }
}
