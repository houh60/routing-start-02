import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Server } from '../server.model';

import { ServersService } from '../servers.service';

@Component({
    selector: 'app-edit-server',
    templateUrl: './edit-server.component.html',
    styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
    server?: Server;
    serverName = '';
    serverStatus = '';
    allowEdit = false;

    constructor(
        private serversService: ServersService,
        private route: ActivatedRoute
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
    }

}
