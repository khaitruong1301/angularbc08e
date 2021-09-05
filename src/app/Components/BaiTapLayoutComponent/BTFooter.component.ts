import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-footer',
    template: `
        <div class="bt-footer">
            Footer
        </div>
    `,
    styles:[`
         .bt-footer {
                background-color:blue;
                height:50px;
            }
    `]
})

export class BTFooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}