import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-list',
    template: `
        <div class="container">
          
                <div class="row">
                    <div class="col-4" *ngFor="let user of arrUser">
                        <app-product [userInput]="user"></app-product>
                    </div>
                </div>
          
        </div>
    
    `
})

export class ProductListComponent implements OnInit {
    arrUser:User[] = [
        {userName:'sideptrai',password:'12/12/2000',email:'si3d@gmail.com',avatar:'https://i.pravatar.cc?u=si'},
        {userName:'khai',password:'123456',email:'khai@gmail.com',avatar:'https://i.pravatar.cc?u=khai'},
        {userName:'luandeptrai',password:'21/12/2000',email:'luan3d@gmail.com',avatar:'https://i.pravatar.cc?u=luan'},
    ]
    constructor() { }
    ngOnInit() { }
}

interface User{
    userName:string
    password:string
    email:string
    avatar:string
}