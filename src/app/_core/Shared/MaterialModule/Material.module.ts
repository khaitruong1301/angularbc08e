import { NgModule } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    imports: [MatAutocompleteModule,MatBadgeModule,MatBottomSheetModule,MatButtonToggleModule,MatButtonModule,MatIconModule],
    exports: [MatAutocompleteModule,MatBadgeModule,MatBottomSheetModule,MatButtonToggleModule,MatButtonModule,MatIconModule],
})
export class MaterialModule { }
