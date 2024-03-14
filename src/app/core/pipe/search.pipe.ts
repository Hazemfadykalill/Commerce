import { Pipe, PipeTransform } from '@angular/core';
import { ProductList } from '../interfaces/product';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products:ProductList[],searchText:string): ProductList[] {
    return products.filter((items)=>
      items.title.toLowerCase().includes(searchText.toLowerCase())

    );
  }

}
