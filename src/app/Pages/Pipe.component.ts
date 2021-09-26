import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pipe',
    template: `<div class="container">
        <h3>Demo pipe</h3>
        <p>UpperCase: {{title | uppercase}}</p>
        <p>LowerCase: {{title | lowercase}}</p>
        <p>percent: {{percent | percent}}</p>
        <p>money: {{money | number: '5.4-6'}}</p>
        <p>money: {{money | number: '1.2-2'}}</p>
        <p>Product: {{ product  | json }}</p>
        <p>Date now: {{dateNow | date: 'dd-MM-yyyy hh:mm:ss a'}}</p>
    </div>`
})
// 001
// 002
// 3
// 4
// 010
// 100

export class PipeComponent implements OnInit {

    title:string = 'CyBerSoft';
    percent:number = 0.76;
    money:number = 1300.28989898798;
    product:any = {id:1,name:'Iphone',price:1000}
    dateNow: Date = new Date();

    constructor() { }
    renderJson(object:any){
        return JSON.stringify(object)
    }


    ngOnInit() { }
}