import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TOKEN_CYBERSOFT } from '../Util/setting';

@Injectable({providedIn: 'root'})
export class FilmsService {

    //Thuộc tính quản lý dữ liệu của modal popup (<app-modal></app-modal>)
    storeModal = new BehaviorSubject({maPhim:1,tenPhim:'Default behavior',hinhAnh:'https://picsum.photos/200/200'})
    dataModal = this.storeModal.asObservable(); 


    xemChiTiet(film:any) {
        this.storeModal.next(film);
    }

    constructor(private httpClient: HttpClient) { } //httpClient giống axios
    getFilms():Observable<any> {

        //Cấu hình header
        // let header = new HttpHeaders();
        // header = header.set('TokenCybersoft',TOKEN_CYBERSOFT);

        //Gọi api tương tự axios trả về 1 observable

        let obser = this.httpClient.get('https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01')

        return obser;
    }
    getFilmDetail(maPhim:number): Observable<any> {
        //Cấu hình header
        // let header = new HttpHeaders();
        // header = header.set('TokenCybersoft',TOKEN_CYBERSOFT);

        //Gọi api tương tự axios trả về 1 observable

        let obser = this.httpClient.get(`https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}
        `)

        return obser;
    }
}