import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaiTapLayoutComponent } from './BaiTapLayout.component';
import { BTContentComponent } from './BTContent.component';
import { BTFooterComponent } from './BTFooter.component';
import { BTHeaderComponent } from './BTHeader.component';
import { BTSideBarComponent } from './BTSidebar.component';


@NgModule({

    declarations: [BaiTapLayoutComponent,BTHeaderComponent,BTSideBarComponent,BTContentComponent,BTFooterComponent], //Chứa các component thuộc module này
    imports: [CommonModule], //Nơi import các m odule khác cho ứng dụng
    exports: [BaiTapLayoutComponent],//Kết quả cần xuất ra (component, module) của module này (để module khác import vào có thể sử dụng)

})
export class BaiTapLayoutModule { }
