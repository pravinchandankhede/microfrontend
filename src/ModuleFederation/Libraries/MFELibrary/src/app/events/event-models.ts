export class IBaseEventData {

}

export class BaseEvent {
    event: string = "BaseEvent";
    data: IBaseEventData | undefined;

    constructor(eventName: string, data: IBaseEventData) {
        this.event = eventName;
        this.data = data;
    }
}
