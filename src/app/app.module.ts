import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapLayoutModule } from './Components/BaiTapLayoutComponent/BaiTapLayout.module';

import { DemoComponent } from './Components/Demo.component';
import { DataBindingModule } from './DataBindingModule/DataBinding.module';
import { DirectiveModule } from './DirectiveModule/Directive.module';
import { PropsModule } from './PropsModule/Props.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectiveUIModule } from './DirectiveUI/DirectiveUI.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,DemoComponent, //Nơi chứa component (Mỗi component sinh ra phải có module chứa nó)
  ],
  imports: [
    BrowserModule,BaiTapLayoutModule,DataBindingModule,DirectiveModule,
    PropsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, //Nơi import các module khác của ứng dụng,
    DirectiveUIModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }], //Nơi khai báo các service 
  bootstrap: [AppComponent] // Nơi khai báo các chạy tren index Component <app-root></app-root> được chạy trên index
})
export class AppModule { }
