import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Server } from '../server.model';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
    selector: 'app-edit-server',
    templateUrl: './edit-server.component.html',
    styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
    server?: Server;
    serverName = '';
    serverStatus = '';
    allowEdit = false;
    changeSaved = false;

    constructor(
        private serversService: ServersService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.server = this.serversService.getServer(+params['id']);
            this.serverName = this.server?.name as string;
            this.serverStatus = this.server?.status as string;
        });
        this.route.queryParams.subscribe(queryParams => {
            this.allowEdit = queryParams['allowEdit'] == '1' ? true : false;
        });
    }

    onUpdateServer() {
        this.serversService.updateServer(this.server?.id as number, { name: this.serverName, status: this.serverStatus });
        this.changeSaved = true;
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(!this.allowEdit) {
            return true;
        }
        if((this.serverName !== this.server?.name || this.serverStatus !== this.server.status) && !this.changeSaved) {
            return confirm('Do you want to discard the changes?');
        } else {
            return true;
        }
    };
}
