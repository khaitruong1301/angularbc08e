import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Film } from '../_core/Models/Film';
import { FilmsService } from '../_core/Services/Films.service';

@Component({
    selector: 'app-home',
    template: `
        <div class="container">
            <h3>Danh sách phim</h3>
            <div class="row">
                <div class="col-4" *ngFor="let film of films">
                    <div class="card">
                        <img [src]="film.hinhAnh"  alt="..."/>
                        <div class="card-body">
                            <p>{{film.tenPhim}}</p>
                            <p>{{film.moTa | shortcut: 100}}</p>
                            <a class="btn btn-success" routerLink="/details/{{film.maPhim}}">Xem chi tiết</a>

                            <a class="btn btn-success" [routerLink]="['/details',film.maPhim]">Xem chi tiết</a>

                            <a class="btn btn-success" [routerLink]="['/details']"  [queryParams]="{maPhim:film.maPhim,tenPhim:film.tenPhim}">Xem chi tiết</a>


                            <button class="btn btn-primary" data-toggle="modal" data-target="#modelId"  (click)="xemChiTiet(film)">Xem chi tiết (popup)</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class HomeComponent implements OnInit {
    films:Film[] = []
    //DI: Dependency injection 
    constructor(private filmService:FilmsService,private store:Store) {

    }
    //ngOninit là 1 lifecycle giống component didmount
    ngOnInit() { 
        this.filmService.getFilms().subscribe((result)=>{
            this.films = result.content;
            console.log('result',result)
        }, (errors)=>{
            console.log('errors',{errors})
        })

    }

    xemChiTiet(film:any) {
        // this.filmService.storeModal.next(film)
        this.filmService.xemChiTiet(film);


        this.store.dispatch({type:'XEM_CHI_TIET',film:film})
    }
}