import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultProduct=[];
    for(const product of value){
       if(product.category.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultProduct.push(product);
       }

    }
    return resultProduct;

  }

}
