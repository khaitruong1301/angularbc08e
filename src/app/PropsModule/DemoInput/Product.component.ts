import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
    selector: 'app-product',
    template: `
        <div class="card text-light">
            <img [src]="userInput.avatar" alt="..."/>
            <div class="card-body bg-dark">
                <p>userName: {{userInput.userName}}</p>
                <p>email: {{userInput.email}}</p>
                <p>password: {{userInput.password}}</p>
                <button (click)="viewDetail()" class="btn btn-success">Xem chi tiết</button>

                <!-- <button (click)="viewDetail2()" class="btn btn-danger">Xem chi tiết 2</button> -->
            </div>
        </div>
    
    `
})

export class ProductComponent implements OnInit {
    //Input dùng để nhận giá trị tham số tại nơi sử dụng thẻ này
    @Input() userInput!:User     
    
    @Output() eventViewDetail = new EventEmitter()
    constructor() { }

    ngOnInit() { }

    viewDetail() {
        //Đưa dữ liệu ra ngoài thông qua phương thức emit

        //Đưa ra nhiều tham số (đưa các tham số vào array hoặc object)
        // let arrParam:[User,boolean]= [this.userInput,true];

        // let objectParam = {
        //     user:this.userInput,
        //     status:true
        // }

        this.eventViewDetail.emit(this.userInput);
    }

    // viewDetail2() {
    //     this.eventViewDetail.emit(this.userInput);
    // }
}


interface User{
    userName:string
    password:string
    email:string
    avatar:string
}