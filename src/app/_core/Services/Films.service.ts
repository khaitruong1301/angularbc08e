import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TOKEN_CYBERSOFT } from '../Util/setting';

@Injectable({providedIn: 'root'})
export class FilmsService {


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