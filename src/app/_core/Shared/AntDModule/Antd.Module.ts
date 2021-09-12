import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
    imports: [NzButtonModule,NzIconModule,NzTypographyModule,NzDividerModule,NzGridModule,NzLayoutModule,NzSpaceModule,NzRateModule,NzTableModule],
    exports: [NzButtonModule,NzIconModule,NzTypographyModule,NzDividerModule,NzGridModule,NzLayoutModule,NzSpaceModule,NzRateModule,NzTableModule],
})
export class AntDModule { }
