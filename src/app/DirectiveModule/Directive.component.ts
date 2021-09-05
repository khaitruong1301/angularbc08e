import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    template: `
        <div class="container" style="margin-bottom:500px">
            <h3 class="display-4">Structural (directive angular cung cấp)</h3>
            <h3>*ngIf</h3>
            <nav class="nav bg-dark text-white">
              <a *ngIf="!isLogin; else tempLogin" class="nav-link active text-white" href="#" (click)="login()">Login</a>
              <!-- <a *ngIf="isLogin" class="nav-link active text-white" href="#">Hello ! {{userName}}</a>       -->
            </nav>
            <ng-template #tempLogin>
              <a *ngIf="isLogin" class="nav-link active text-white" href="#">Hello ! {{userName}}</a>      
            </ng-template>
            <hr />
            <div class="form-group">
                <p>Nhập số</p>
                <input class="form-control w-25" [(ngModel)]="number" />
            </div>
            <div class="alert alert-success">
                <p *ngIf="number%2===0">Số chẵn</p>
                <p *ngIf="number%2!==0">Số lẻ</p>
            </div>
            <h3>*ngSwitchCase</h3>

            <select [(ngModel)]="color" class="form-control w-25">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>
            </select>
            <div [ngSwitch]="color">
                <p style="color: red;" *ngSwitchCase="'red'">Red</p>
                <p style="color: green;" *ngSwitchCase="'green'">Green</p>
                <p style="color: blue;" *ngSwitchCase="'blue'">Blue</p>
                <p style="color: orange;" *ngSwitchCase="'orange'">Orange</p>
            </div>
            <hr/>
            <h3>*ngFor</h3>
            <div class="row">
                <div class="col-4" *ngFor="let user of arrUser; let index = index">
                    <div class="card">
                        <img [src]="user.avatar" alt="..." />
                        <div class="card-body">
                            <p>ID: {{index + 1}}</p>
                            <p>userName: {{user.userName}}</p>
                            <p>Password: {{user.password}}</p>
                            <p>Email: {{user.email}}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `
})
export class DirectiveComponent implements OnInit {
    arrUser:User[] = [
        {userName:'sideptrai',password:'12/12/2000',email:'si3d@gmail.com',avatar:'https://i.pravatar.cc?u=si'},
        {userName:'khai',password:'123456',email:'khai@gmail.com',avatar:'https://i.pravatar.cc?u=khai'},
        {userName:'luandeptrai',password:'21/12/2000',email:'luan3d@gmail.com',avatar:'https://i.pravatar.cc?u=luan'},
    ]
    color:string = 'red';
    number:number = 5;
    userName:string = 'sideptrai';
    isLogin: boolean = false;
    login() {
        this.isLogin = true;
    }
    constructor() { }
    ngOnInit() { }
}

interface User{
    userName:string
    password:string
    email:string
    avatar:string
}