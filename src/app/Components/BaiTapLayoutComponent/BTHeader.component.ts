import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-header',
    template: `
        <div class="bt-header" style="height: 50px;">
            BT Header
        </div>
    `,
    styles:[`
        .bt-header {
            background:red;
        }
    
    `]
})

export class BTHeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}