import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form',
    template: `<div class="container">
        <form #frmInfo="ngForm" (ngSubmit)="submit(frmInfo.value)">
            <h3>Form - validation</h3>
            <div class="form-group">
                <p>Email</p>
                <input [(ngModel)]="userInput.email" class="form-control" minlength="6" maxlength="32" #email="ngModel"  name="email" ngModel required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                <div *ngIf="(email.touched || email.dirty) && email.errors">
                    <p *ngIf="email.errors.required" class="alert alert-danger">email không được bỏ trống !</p>
                    <p *ngIf="email.errors.pattern" class="alert alert-danger">email không đúng định dạng</p>
                    <p *ngIf="email.errors.minlength || email.errors.maxlength" class="alert alert-danger">email từ 6 - 32 ký tự</p>

                </div>
            </div>
            <div class="form-group">
                <p>Name</p>
                <input [(ngModel)]="userInput.name"  class="form-control" name="name" ngModel required/>
            </div>
            <div class="form-group">
                <p>Schools</p>
                <select [(ngModel)]="userInput.school"  class="form-control" name="school" ngModel required>
                    <option *ngFor="let school of schools" [value]="school.id">{{school.name}}</option>
                </select>
            </div>
            <div class="form-group">
                <button type="submit" [disabled]="frmInfo.invalid || frmInfo.submitted" class="btn btn-danger">Submit</button>
            </div>
        </form>

        <div class="mt-2">
            <table class="table">
                <thead>
                    <tr><td>email</td><td>name</td><td>school</td><td></td></tr>
                </thead>
                <tbody>
                    <ng-container *ngIf="!isEdit">
                        <tr *ngFor="let user of arrUser">
                            <td>{{user.email}}</td>
                            <td>{{user.name}}</td>
                            <td>{{user.school}}</td>
                            <td>
                                <button class="mr-2 btn btn-primary" (click)="edit(user)" >Chỉnh sửa</button>
                                <button class="mr-2 btn btn-success" (click)="setEdit()" >Chỉnh sửa</button>
                                <button class="ml-2 btn btn-danger">Xoá</button>
                            </td>
                        </tr>
                    </ng-container>
                    <ng-container *ngIf="isEdit">
                        <tr *ngFor="let user of arrUser">
                            <td>{{user.email}}</td>
                            <td><input class="form-control" [(ngModel)]="user.name"></td>
                            <td>
                                <select [(ngModel)]="user.school" class="form-control"> 
                                    <option *ngFor="let school of schools" [value]="school.id">{{school.name}}</option>
                                </select>
                            </td>
                            <td>
                                <button class="mr-2 btn btn-primary" (click)="edit(user)" >Chỉnh sửa</button>
                                <button class="mr-2 btn btn-success" (click)="setEdit()" >Cập nhật</button>
                                <button class="ml-2 btn btn-danger">Xoá</button>
                            </td>
                        </tr>
                    </ng-container>
                </tbody>
            </table>
        </div>
    </div>`,
    styles:[`
        input.ng-invalid,select.ng-invalid {
            border-left:5px solid red;
        }
        input.ng-valid,select.ng-valid {
            border-left:5px solid green;
        }
    `]
})

export class FormComponent implements OnInit {
    isEdit:boolean = false;
    setEdit(){
        this.isEdit = !this.isEdit;
    }

    @ViewChild('frmInfo') frmInfo!:NgForm;
    userInput:User = {name:'',email:'',school:''}

    arrUser:User[] = [
        {name:'si',email:'si@gmail.com',school:'1'},
        {name:'tuan',email:'tuan@gmail.com',school:'2'}
    ]
    edit(userEdit:User){
        // this.userInput = userEdit;
        this.frmInfo.setValue(userEdit);
    }

    submit(values:User) {
        let userEdit = this.arrUser.find(us=>us.email == values.email);

        if(userEdit){
            // userEdit.email = values.email;
            userEdit.name = values.name;
            userEdit.school = values.school;
        }

    }
    schools:School[] = [
        {id:'1',name:'Cybersoft'},
        {id:'2',name:'Cyberlearn'},
    ]
    constructor() { }

    ngOnInit() { }
}

interface User {
    email:string,
    name:string,
    school:string
}

interface School {
    id:string,name:string
}