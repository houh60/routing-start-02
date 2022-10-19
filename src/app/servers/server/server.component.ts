import { Component, OnInit } from '@angular/core';
import { Server } from '../server.model';

import { ServersService } from '../servers.service';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
    server?: Server;

    constructor(private serversService: ServersService) {}

    ngOnInit() {
        this.server = this.serversService.getServer(1);
    }

}
