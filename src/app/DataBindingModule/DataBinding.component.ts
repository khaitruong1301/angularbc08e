import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    template: `
        <div class="container">
            <h1 class="display-4">Databinding</h1>
            <h3>Oneway binding</h3>
            <p class="text-danger">1. Interpolation (Binding dữ liệu từ models -> view thông qua thuộc tính với dấu cặp ngoặc nhọn ) ==> Dùng cho phần innerHTML của thẻ</p>
            <p>Thông tin lớp học: {{title}}</p>
            <input value="{{title}}" />
            <p class="text-danger">2. Property binding (binding dựa trên thuộc tính của thẻ thông qua [] ) => Thường dùng cho thẻ input</p>
            <div [innerHTML]="'Thông tin lớp học' + ' ' + title"></div>

            <input [value]="title" />
            <p>3. Event binding (Thay đổi dữ liệu trên giao diện thông qua xử lý thao tác từ người dùng)</p>
            <div class="form-group">
                <p>Tiêu đề</p>
                <input id="txtTitle" class="form-control w-25" #tagInput /> template variable <br /> 
                <button class="btn btn-success" (click)="changeTitle(tagInput.value)">Change title</button>
            </div>
            <h3>Two binding (Binding dữ liệu 2 chiều tự động) </h3>
            <input class="form-control" [(ngModel)]="title" />
            <table class="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>image</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let product of arrProduct">
                        <td>{{product.id}}</td>
                        <td>{{product.name}}</td>
                        <td><img [src]="product.img" width="50" height="50" alt="..."></td>
                        <td>{{product.price}}</td>
                        <td><input class="form-control" [(ngModel)]="product.quantity"></td>
                        <td>{{product.price * product.quantity}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})
export class DataBindingComponent implements OnInit {
    //MVVM
    //Dữ liệu muốn hiển thị được lên giao diện thì phải là thuộc tính của component
    title:string = 'Bootcamp08E';
    arrProduct: Product[] = [
        {id:'1',name:'Iphone X',price:1000,img:'https://picsum.photos/id/1/200/200',quantity:15},
        {id:'2',name:'Iphone XS',price:2000,img:'https://picsum.photos/id/2/200/200',quantity:10},
        {id:'3',name:'Iphone XS MAX',price:3000,img:'https://picsum.photos/id/3/200/200',quantity:20},
    ]

    constructor() { }

    changeTitle(newTitle:string) {
        this.title =  newTitle;
    }
    ngOnInit() { }
}
interface Product {
    id:string,
    name:string,
    price:number,
    img:string
    quantity:number
}
