import { BaseEvent, IBaseEventData } from "mfelibrary";

export class HideMenuEvent extends BaseEvent {
    constructor(data: HideMenuEventData) {
        super("HideMenuEvent", data);
    }
}

export class HideMenuEventData extends IBaseEventData {
    hide: boolean = true;

}
