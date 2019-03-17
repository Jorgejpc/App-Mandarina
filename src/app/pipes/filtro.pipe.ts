import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultProduct=[];
    for(const product of value){
       if(product.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultProduct.push(product);
       }

    }
    return resultProduct;
  }

}
