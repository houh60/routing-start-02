import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Server } from './server.model';
import { ServerService } from './server.service';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    public servers: Server[] = [];

    constructor(
        private serversService: ServerService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.servers = this.serversService.getServers();
    }
    onReload() {
        // this.router.navigate(['servers'], { relativeTo: this.route });
    }
}
