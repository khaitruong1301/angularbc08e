import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapLayoutModule } from './Components/BaiTapLayoutComponent/BaiTapLayout.module';

import { DemoComponent } from './Components/Demo.component';
import { DataBindingModule } from './DataBindingModule/DataBinding.module';
import { DirectiveModule } from './DirectiveModule/Directive.module';

@NgModule({
  declarations: [
    AppComponent,DemoComponent, //Nơi chứa component (Mỗi component sinh ra phải có module chứa nó)
  ],
  imports: [
    BrowserModule,BaiTapLayoutModule,DataBindingModule,DirectiveModule //Nơi import các module khác của ứng dụng
  ],
  providers: [], //Nơi khai báo các service 
  bootstrap: [AppComponent] // Nơi khai báo các chạy tren index Component <app-root></app-root> được chạy trên index
})
export class AppModule { }
