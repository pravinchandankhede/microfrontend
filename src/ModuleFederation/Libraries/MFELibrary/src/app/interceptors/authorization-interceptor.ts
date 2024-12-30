import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap } from "rxjs";
import { SessionService } from "../services/session.service";

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
    public static lastCalled: Date = new Date();
    constructor(
        private readonly sessionService: SessionService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        AuthorizationInterceptor.lastCalled = new Date();

        var token = this.sessionService.get("token");

        request = request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + token
            }
        });

        return next.handle(request);
    }
}
