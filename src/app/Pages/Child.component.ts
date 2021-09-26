import { AfterContentInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <div class="container">
            <p>title: {{title}}</p>

        </div>
    
    `
})

export class ChildComponent implements OnInit,OnChanges,OnDestroy,AfterContentInit {

    @Input() title:string = '';
    timeout:any = {}
    constructor() { 
        console.log('contructor')
    }
   
    ngOnChanges(changes: SimpleChanges): void {
       //Chạy trước oninit và chạy mỗi khi input thay đổi
       console.log('onchange',changes)
       //useEffect(callback,[state])
    }
    ngOnInit() { 
        //Giống component didmount chạy 1 lần duy nhất khi component load xong html 
        console.log('oninit');

        //useEffect(callback,[])
        this.timeout = setInterval(()=> {
            console.log(1)
        },1000)
    }
    ngAfterContentInit(): void {
        // throw new Error('Method not implemented.');
        
    }

    ngOnDestroy(): void {
       //Giống componentwillUnmount
       //Chạy trước khi component biến mất khỏi giao diện (Xoá các biến chạy ngầm từ observable hoặc service ngầm)
        clearInterval(this.timeout);
    }
}