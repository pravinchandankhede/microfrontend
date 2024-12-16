import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { filter, map } from "rxjs/operators";
import { BaseEvent, IBaseEventData } from "./event-models";

@Injectable({
    providedIn: 'root'
})
export class EventBus {
    private eventSubject = new Subject<BaseEvent>();

    on<T1 extends IBaseEventData>(event: string): Observable<T1> {
        return this.eventSubject.asObservable().pipe(
            filter(e => e.event === event),
            map(e => e.data as T1)
        );
    }

    emit(data: BaseEvent) {
        this.eventSubject.next(data);
    }

    emit1<T1 extends BaseEvent>(event: string, data: T1) {
        this.eventSubject.next(data);
    }
}
