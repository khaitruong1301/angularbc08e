import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery'
declare let $: any;

// import $ from 'jquery';
// declare var $:JQueryStatic;

@Component({
    selector: 'app-lifecycle',
    template: `<div class="container">
        <app-child [title]="title"></app-child> 
        <br />
        <input #iTitle class="form-control mt-2" />
        <button (click)="changeTitle(iTitle.value)">Change title</button>
    </div>`
})

export class LifecycleComponent implements OnInit {

    title:string = 'cybersoft';

    
    constructor() { }
    changeTitle(newTitle:string) {
        this.title = newTitle;

    }
    ngOnInit() { }
}