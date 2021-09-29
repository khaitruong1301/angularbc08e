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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectiveUIModule } from './DirectiveUI/DirectiveUI.module';
//Khai báo routing 
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/Home.component';
import { AboutComponent } from './Pages/About.component';
import { ContactComponent } from './Pages/Contact.component';
import { LoginComponent } from './Pages/Users/Login.component';
import { RegisterComponent } from './Pages/Users/Register.component';
import { HomeModule } from './Pages/Home.module';
import { UsersModule } from './Pages/Users/Users.module';
import { AdminModule } from './Pages/Admin/Admin.module';
import { HeaderInterceptor } from './_core/Guards/Author.interceptor';
import { ModalComponent } from './appModal.component';
import { StoreModule } from '@ngrx/store';
import { modalReducer } from './_core/NGRXStore/Reducers/Modal.Reducer';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


let appRoutes: Routes = [
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'users', loadChildren: () => UsersModule },
  { path: 'admin', loadChildren: () => AdminModule },
  { path: '', loadChildren: () => HomeModule },

  // {path:'home',component:HomeComponent},
  // {path:'about',component:AboutComponent},
  // {path:'contact',component:ContactComponent},
  // {path:'login',component:LoginComponent},
  // {path:'register',component:RegisterComponent},
  // {path:'',component:HomeComponent},
  // {path:'**',redirectTo:''}

]

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent, DemoComponent,ModalComponent //Nơi chứa component (Mỗi component sinh ra phải có module chứa nó)
  ],
  imports: [
    BrowserModule, BaiTapLayoutModule, DataBindingModule, DirectiveModule,
    PropsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, //Nơi import các module khác của ứng dụng,
    DirectiveUIModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    StoreModule.forRoot({
                          modalReducer:modalReducer,
                          //Các reducer khác ...
                        }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }) //Module giúp gọi api 
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }

  ], //Nơi khai báo các service 
  bootstrap: [AppComponent] // Nơi khai báo các chạy tren index Component <app-root></app-root> được chạy trên index
})
export class AppModule { }
