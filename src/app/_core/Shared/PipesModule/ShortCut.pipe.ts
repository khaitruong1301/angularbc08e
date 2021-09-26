import { Pipe, PipeTransform } from '@angular/core';

/*
    {{value | pipeName: params}}
    {{value | shortcut: 100}}
ex: 
*/


@Pipe({
    name: 'shortcut'
})

export class ShortCutPipe implements PipeTransform {

    transform(value: any, limit:number): any {
        
        if(value.length > limit) {
            return value.substr(0,limit) + '...';
        }
        return value;
    }
}