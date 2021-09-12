import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { ProductListComponent } from '../DemoInput/ProductList.component';

@Component({
    selector: 'app-demo-view-child',
    template: `
        <div class="container">
            <h3>Demo view child</h3>
            <div class="form-group">
                <p>userName</p>
                <input id="userName" class="form-control" #usName [(ngModel)]="newUser.userName" />
            </div>
            <div class="form-group">
                <p>password</p>
                <input id="password" class="form-control" [(ngModel)]="newUser.password" />
            </div>
            <div class="form-group">
                <p>email</p>
                <input id="email" class="form-control" [(ngModel)]="newUser.email" />
            </div>
            <div class="form-group">
                <button class="btn btn-success" (click)="getUserName()">Get userName</button>
                <button class="btn btn-outline-success" (click)="addUser()">Add user</button>
            </div>
            <div>
                <h3>Danh sách user</h3>
                <app-product-list #tagProductList></app-product-list>
            </div>
        </div>
    `
})

export class DemoViewChildComponent implements OnInit {
    constructor() { }
    newUser:User = {userName:'',password:'',email:'',avatar:''}
    @ViewChild('usName') tagInput!:ElementRef; //ElementRef là đối tượng html trong angular
    @ViewChild('tagProductList') tagProductList!:ProductListComponent;
    ngOnInit() { 

    }

    addUser() {
        let newUser = {...this.newUser,avatar:'https://i.pravatar.cc?u='+this.newUser.userName}

        //Dom đến thẻ app-product-list thông qua viewchild
        this.tagProductList.arrUser.push(newUser);
    }
    getUserName() {
        // alert(this.tagInput.nativeElement.value);
        // this.tagInput.nativeElement.value = 'Hello sĩ';
        // this.tagInput.nativeElement.style.color= 'red';
        // document.getElementById('userName')!.style.fontSize = '50px';
        console.log(this.tagProductList)
        this.tagProductList.arrUser = [];
    }
}

interface User{
    userName:string
    password:string
    email:string
    avatar:string
}