import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FilmsService } from './_core/Services/Films.service';

@Component({
    selector: 'app-modal',
    template: `
        <!-- Button trigger modal -->
        <!-- <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
          Launch
        </button> -->
        <!-- Modal -->
        <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{phimModal.tenPhim}}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div class="modal-body">
                        <img [src]="phimModal.hinhAnh" alt="..." class="w-100">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class ModalComponent implements OnInit,OnDestroy {
    phimModal:any = {tenPhim:'Default',hinhAnh:'https://picsum.photos/200/200'}
    
    subModal!:Subscription; //Biến quản lý các biến observable

    constructor(private filmService:FilmsService, private store:Store<{modalReducer:FilmModal}>) { }
   

    ngOnInit() { 
        // this.filmService.dataModal.subscribe((dataModal) => {
        //     //Hàm subscribe chạy mỗi khi state modal bị thay đổi
        //     this.phimModal = dataModal;
        // })

        this.subModal = this.store.select('modalReducer').subscribe((result)=>{
            console.log('result',result);
            this.phimModal = result;
        })
    }

    ngOnDestroy(): void {
        //Unsub tất cả các biến observable khi component mất khỏi giao diện
       if(this.subModal) {
           this.subModal.unsubscribe();
       }
    }

}

interface FilmModal {
    maPhim:string,
    tenPhim:string,
    hinhAnh:string
}