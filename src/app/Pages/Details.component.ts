import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../_core/Services/Films.service';

@Component({
    selector: 'app-details',
    template: `
        <div class="container">
            mã phim: {{maPhim}}
            <div>
                <img src="{{filmDetail.hinhAnh}}" />
            </div>
        </div>
    
    `
})

export class DetailsComponent implements OnInit {
    
    maPhim:number = 0;
    filmDetail:any = {}
    //ActivatedRoute dùng để lấy param từ url
    constructor(private avtRoute:ActivatedRoute,private filmService:FilmsService,private title:Title) { }
    ngOnInit() { 
        // this.avtRoute.params.subscribe((params)=>{
        //     this.maPhim = params.id;
        //     //Sau khi lấy tham số từ url => gọi service
        //     this.layThongTinPhim(this.maPhim);
        // })

        this.avtRoute.queryParams.subscribe((params)=>{
            this.layThongTinPhim(params.maPhim);
            this.title.setTitle(params.tenPhim);
        })

    }

    layThongTinPhim (maPhim:number) {

        this.filmService.getFilmDetail(maPhim).subscribe((result)=>{
            this.filmDetail = result.content;
            console.log('result',result)
        },(error)=>{
            console.log({error})
        })
    }
}