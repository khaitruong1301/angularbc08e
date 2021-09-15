import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AntDModule } from '../_core/Shared/AntDModule/Antd.Module';
import { AboutComponent } from './About.component';
import { ContactComponent } from './Contact.component';
import { HomeComponent } from './Home.component';
import { HomeTemplateComponent } from './HomeTemplate.component';
//Định nghĩa homeRoutes
import { RouterModule, Routes } from '@angular/router';
import { FilmsService } from '../_core/Services/Films.service';
import { DetailsComponent } from './Details.component';

const homeRoutes:Routes = [
    {path:'',component:HomeTemplateComponent,children:[
        {path:'',component:HomeComponent},
        {path:'about',component:AboutComponent},
        {path:'contact',component:ContactComponent},
        {path:'details/:id',component:DetailsComponent},
        {path:'details',component:DetailsComponent},

    ]}
]



@NgModule({
    declarations: [HomeComponent,AboutComponent,ContactComponent,HomeTemplateComponent],
    imports: [CommonModule,AntDModule,FormsModule,RouterModule.forChild(homeRoutes)],
    exports: [],
    // providers:[FilmsService]//Khai báo service
})
export class HomeModule { }
