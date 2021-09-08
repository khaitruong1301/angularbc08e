import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-product',
    template: `
        <div class="card text-light">
            <img [src]="userInput.avatar" alt="..."/>
            <div class="card-body bg-dark">
                <p>userName: {{userInput.userName}}</p>
                <p>email: {{userInput.email}}</p>
                <p>password: {{userInput.password}}</p>
            </div>
        </div>
    
    `
})

export class ProductComponent implements OnInit {
    //Input dùng để nhận giá trị tham số tại nơi sử dụng thẻ này
    @Input() userInput!:User     

    constructor() { }

    ngOnInit() { }
}


interface User{
    userName:string
    password:string
    email:string
    avatar:string
}