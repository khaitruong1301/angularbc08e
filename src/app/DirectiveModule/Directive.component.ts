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
                <ng-container *ngIf="arrUser.length!==0">
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
                </ng-container>
            </div>
            <hr />
            <h3>ng-content</h3>
            <app-demo-ngContent>
                <img class="logo" src="https://picsum.photos/50/50" alt="...">

                <h3 class="title">Cybersoft</h3>

            </app-demo-ngContent>
            <hr/>
            <h3>[ngClass]</h3>
            <p [ngClass]="{'mau-chu':mauChu,'font-chu':fontChu }" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati provident voluptatem. Quisquam dolorem voluptates, aspernatur ipsum vitae, incidunt nobis sint temporibus commodi quo adipisci pariatur accusantium ea omnis error! </p>
            <table class="table">
                <thead>
                    <tr>
                        <th>userName</th>
                        <th>password</th>
                        <th>email</th>
                        <th>avatar</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr [ngClass]="{'bg-dark text-white':index%2==0}" *ngFor="let user of arrUser; let index = index">
                        <td>{{user.userName}}</td>
                        <td>{{user.password}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.avatar}}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <h3>*ngStyle</h3>
            <div [ngStyle]="{'background-image':backgroundImg}" style="height:300px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ex quos culpa laboriosam error, quo quas voluptatum impedit consequuntur cum et reprehenderit soluta fugiat rem illo commodi fuga ratione aut?
            </div>

            <h3>Bài tập</h3>
            <p [ngStyle]="{'font-size':fontSize+'px'}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore enim perferendis facilis repellat qui iusto nobis facere ex tempore recusandae vero quo minus quisquam fuga illum dolorum, natus corporis quae.</p>
            <button class="m-2 btn btn-outline-success" (click)="tangGiamFont(true)"> + </button>
            <button class="m-2 btn btn-outline-success" (click)="tangGiamFont(false)"> - </button>
            <hr />
            <h3>Bài tập login</h3>
            <app-bt-directive></app-bt-directive>
            <hr />
            <h3>Bài tập quản lý sản phẩm</h3>
            <app-bt-qlsp></app-bt-qlsp>
        </div>
    `,
    styles:[`
        .mau-chu {
            color:red;
        }
        .font-chu{
            font-size:25px
        }
    `]
})
export class DirectiveComponent implements OnInit {
    fontSize:number = 17;
    backgroundImg:string = 'url("https://picsum.photos/200/200")';
    mauChu:boolean = true
    fontChu:boolean = false
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
    tangGiamFont(tangGiam:boolean){
        if(tangGiam) this.fontSize += 2;
        else this.fontSize -= 2;
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