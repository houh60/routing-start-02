import { Component, OnInit } from '@angular/core';
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

    constructor(private serversService: ServersService) {}

    ngOnInit() {
        this.server = this.serversService.getServer(1);
        this.serverName = this.server?.name as string;
        this.serverStatus = this.server?.status as string;
    }

    onUpdateServer() {
        this.serversService.updateServer(this.server?.id as number, { name: this.serverName, status: this.serverStatus });
    }

}
