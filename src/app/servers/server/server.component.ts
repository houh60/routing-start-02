import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Server } from '../server.model';

import { ServerService } from '../server.service';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
    server?: Server;

    constructor(
        private serversService: ServerService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.data.subscribe(data => this.server = data['server']);
        // this.route.params.subscribe(params => {
        //     this.server = this.serversService.getServer(+params['id']);
        // });
    }

    onEdit() {
        this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
    }

}
