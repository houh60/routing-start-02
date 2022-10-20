import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Server } from "../server.model";
import { ServerService } from "../server.service";

@Injectable()
export class ServerResolver implements Resolve<Server> {

    constructor(
        private serverService: ServerService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
        return this.serverService.getServer(+route.params['id']) as Server;
    }

}
