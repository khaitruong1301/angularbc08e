import { CommonModule } from '@angular/common'; //Sử dụng các directive for, if, switch ...
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './Directive.component';


@NgModule({
    declarations: [DirectiveComponent],
    imports: [CommonModule,FormsModule],
    exports: [DirectiveComponent],
})
export class DirectiveModule { }
