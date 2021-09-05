import { Component, OnInit } from '@angular/core';

//a-component-inline : tạo 1 component

@Component({
    selector: 'app-bai-tap-layout', //Tên thẻ component
    template: `
        <div>
            Bài tập layout component
            <app-bt-header></app-bt-header>
            <div class="d-flex">
                <div style="width:30%">
                    <app-bt-sidebar></app-bt-sidebar>
                </div>
                <div style="width: 70%;">
                    <app-bt-content></app-bt-content>
                </div>
            </div>
            <div>
                <app-bt-footer></app-bt-footer>
            </div>
        </div>
    
    `
})

export class BaiTapLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}