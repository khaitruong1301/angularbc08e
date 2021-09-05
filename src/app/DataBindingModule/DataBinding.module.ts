import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataBindingComponent } from './DataBinding.component';

//Sử dụng FormsModule cho 2waybinding
import {FormsModule} from '@angular/forms'

@NgModule({
    declarations: [DataBindingComponent], //Chứa component
    imports: [CommonModule,FormsModule], //Chứa các module sử dụng cho module này
    exports: [DataBindingComponent],
})


export class DataBindingModule { }
