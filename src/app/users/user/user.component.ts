import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
    user?: { id: number, name: string };
    subscription = new Subscription;
    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            params => {
                this.user = {
                    id: params['id'],
                    name: params['name']
                };
            })
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
