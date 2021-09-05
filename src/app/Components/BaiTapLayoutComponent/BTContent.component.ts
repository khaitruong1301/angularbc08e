import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-content',
    template: `
    <div class="bt-content">
        Content
    </div>
    
    `,
    styles: [
        `
            .bt-content {
                background-color:yellow;
                height:50px;
            }
        `
    ]
})

export class BTContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}