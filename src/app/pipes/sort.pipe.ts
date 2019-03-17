import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';
import { Producto } from '../models/producto';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value:Array<any>, reverse:number):Array<any> {

    if(reverse==1){ return _.sortBy(value, function(item){ return item.name.toLowerCase();}).reverse();
    }else if(reverse==2){ return _.sortBy(value, function(item){ return item.name.toLowerCase();});}
    else{
      return value;
    }

    


  

}
}
