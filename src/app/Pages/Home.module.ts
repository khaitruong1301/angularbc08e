import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './About.component';
import { ContactComponent } from './Contact.component';
import { HomeComponent } from './Home.component';
import { HomeTemplateComponent } from './HomeTemplate.component';
//Định nghĩa homeRoutes
import { RouterModule, Routes } from '@angular/router';
import { FilmsService } from '../_core/Services/Films.service';
import { DetailsComponent } from './Details.component';
import { FormComponent } from './Form.component';
import { ProfileComponent } from './Profile.component';
import { isLoginGuard } from '../_core/Guards/isLogin.guard';
import { RegisterComponent } from './Users/Register.component';
import { LoginComponent } from './Users/Login.component';
import { UsersModule } from './Users/Users.module';
import { isRegisterGuard } from '../_core/Guards/isRegister.guard';
import { PipeComponent } from './Pipe.component';
import { PipeModule } from '../_core/Shared/PipesModule/Pipe.module';
import { LifecycleComponent } from './Lifecycle.component';
import { ChildComponent } from './Child.component';
import { AntDModule } from '@Antdesign';
import { MaterialModule } from '@share/MaterialModule/Material.module';

const homeRoutes:Routes = [
    {path:'',component:HomeTemplateComponent,children:[
        {path:'',component:HomeComponent},
        {path:'about',component:AboutComponent},
        {path:'contact',component:ContactComponent},
        {path:'details/:id',component:DetailsComponent},
        {path:'details',component:DetailsComponent},
        {path:'form',component:FormComponent},
        {path:'register',component:RegisterComponent,canDeactivate:[isRegisterGuard]},
        {path:'login',component:LoginComponent},
        {path:'pipe',component:PipeComponent},
        {path:'lifecycle',component:LifecycleComponent},
        {path:'profile',component:ProfileComponent,canActivate:[isLoginGuard]},

    ]}
]

@NgModule({
    declarations: [HomeComponent,AboutComponent,ContactComponent,HomeTemplateComponent,FormComponent,ProfileComponent,PipeComponent,LifecycleComponent,ChildComponent],
    imports: [CommonModule,FormsModule,RouterModule.forChild(homeRoutes),PipeModule,AntDModule,MaterialModule],
    exports: [],
    // providers:[FilmsService]//Khai báo service
})
export class HomeModule { }
