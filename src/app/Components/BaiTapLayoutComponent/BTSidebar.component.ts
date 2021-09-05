import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-sidebar',
    template: `
        <div class="bt-sidebar">
            sidebar
        </div>
    `,
    styles:[`
        .bt-sidebar{
            background-color:green;
            height:50px;
        }
    `]
})

export class BTSideBarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}